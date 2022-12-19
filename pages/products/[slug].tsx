import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const detail = ({ data }: any) => {
  const plus = () => {
    if (typeof document !== "undefined") {
      const input: any = document.querySelector("#input-amount");
      input.value = parseInt(input.value) + 1;
    }
  };
  const Subtraction = () => {
    if (typeof document !== "undefined") {
      const input: any = document.querySelector("#input-amount");
      input.value = parseInt(input.value) - 1;
      if (input.value <= 1) {
        input.value = 1;
      }
    }
  };

  const imgChange = (index: number) => {
    const img: any = document.querySelector(".detail-img img");
    img.src = data.images[index];
  };

  const addToCart = (id: number) => {
    if (typeof document !== "undefined") {
      const input: any = document.querySelector("#input-amount");
      const amount: any = input.value;
      // take value from option
      const size: any = document.querySelector("#size");
      const color: any = document.querySelector("#color");
      const sizevalue: any = size.options[size.selectedIndex].value;
      const colorvalue: any = color.options[color.selectedIndex].value;
      if (sizevalue === "0") {
        toast.error("Vui lòng chọn size");
        return;
      }
      if (colorvalue === "0") {
        toast.error("Vui lòng chọn màu");
        return;
      }

      const cart = localStorage.getItem("cart");
      if (cart === null) {
        const cart: any[] = [
          {
            id: id,
            name: data.product[0].name,
            amount: amount,
            size: sizevalue,
            color: colorvalue,
            price:
              (data.product[0].price -
                (data.product[0].price * data.product[0].discount) / 100) *
              amount,
            image: data.images[0],
          },
        ];
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success("Thêm vào giỏ hàng thành công");
      } else {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const index = cart.findIndex((item: any) => item.id === id);
        if (index === -1) {
          cart.push({
            id: id,
            name: data.product[0].name,
            amount: amount,
            size: sizevalue,
            color: colorvalue,
            price:
              (data.product[0].price -
                (data.product[0].price * data.product[0].discount) / 100) *
              amount,
            image: data.images[0],
          });
        } else {
          cart[index].amount = parseInt(cart[index].amount) + parseInt(amount);
          cart[index].price =
            (data.product[0].price -
              (data.product[0].price * data.product[0].discount) / 100) *
            cart[index].amount;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success("Thêm vào giỏ hàng thành công");
      }
    }
  };

  return (
    <>
      <div className="detail-wraper">
        <ToastContainer />
        {/* <div className="detail-left">
          <div className="detail-img">
            <img src="/Images/giay1.png" alt="" />
          </div>
          <div className="img-select">
            <img src="/Images/giay2.png" alt="" />
          </div>
        </div> */}
        <div className="detail-left" key={data.product[0].id}>
          <div className="detail-img">
            <img src={data.images[0]} alt="" />
          </div>
          <div className="img-select">
            {data.images.map((img: any, index: number) => {
              return (
                <img
                  key={index}
                  src={img}
                  onClick={() => imgChange(index)}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <div className="detail-right">
          <div className="detail-name">{data.product[0].name}</div>
          <div className="detail-rating">
            <div className="detail-rating-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="detail-rating-number">
              {data.product[0].seen} đánh giá
            </div>
          </div>
          <div className="detail-price">
            {(
              data.product[0].price -
              (data.product[0].price * data.product[0].discount) / 100
            ).toLocaleString("vi-VN")}{" "}
            vnđ
            <span className="old-price">
              {data.product[0].price.toLocaleString("vi-VN")} vnđ
            </span>
          </div>
          <div className="detail-description">
            <div className="detail-description-title">Mô tả:</div>
            <div
              className="detail-description-text"
              dangerouslySetInnerHTML={{ __html: data.product[0].content }}
            ></div>
          </div>
          <div className="detail-size">
            <div className="detail-size-title">Size:</div>
            <select id="size">
              {data.storage.map((size: any, index: number) => {
                return (
                  <option key={index}  value={
                    data.storage[index].sizename
                  }>
                    {size.sizename}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="detail-color">
            <div className="detail-color-title">Màu:</div>
            <select name="" id="color">
              {data.storage.map((size: any, index: number) => {
                return (
                  <option key={index} value={size.color}>
                    {size.color}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="detail-amount">
            <div className="detail-amount-title">Số lượng:</div>
            <button className="detail-up-button" onClick={() => plus()}>
              +
            </button>
            <input
              type="number"
              id="input-amount"
              className=""
              defaultValue={1}
            />
            <button
              className="detail-down-button"
              onClick={() => Subtraction()}
            >
              -
            </button>
          </div>
          <div className="detail-checked">
            <div className="detail-checked-img">
              <img src="/Images/checked.png" alt="" />
              <p>Giao hàng miễn phí</p>
            </div>
            <div className="detail-checked-img">
              <img src="/Images/checked.png" alt="" />
              <p>Đổi trả trong 30 ngày</p>
            </div>
            <div className="detail-checked-img">
              <img src="/Images/checked.png" alt="" />
              <p>Thanh toán khi nhận hàng</p>
            </div>
          </div>
          <div className="detail-button-addcart">
            <button
              className="detail-button-addcart-button"
              onClick={() => addToCart(data.product[0].idProd)}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
          <div className="detail-button-buy">
            <button className="detail-button-buy-button">Mua ngay</button>
          </div>
        </div>
      </div>
      <div className="product-sugges">
        <div className="giay-wrap">
          <h3
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "bold",
              color: "black",
              marginBottom: "20px",
            }}
          >
            Sản phẩm cùng loại
          </h3>
          <div className="giay-grid">
            {data.relate.map((item: any, index: number) => {
              return (
                <div className="giay-flex" key={index}>
                  <Link href={"/products/" + item.slug}>
                    <div className="giay-img">
                      <img src={item.image1} alt="" />
                    </div>
                    <span>{item.name}</span>
                    <div className="giay-price">
                      <h3>
                        {" "}
                        {(
                          item.price -
                          (item.price * item.discount) / 100
                        ).toLocaleString("vi-VN")}{" "}
                        ₫
                      </h3>
                      <h4>{item.price} ₫</h4>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="more-pro">
            <a href="#">Xem thêm sản phẩm</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default detail;

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const res = await fetch(
    `https://api.trungthanhweb.com/api/singleProd/${slug}.html`
  );
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
