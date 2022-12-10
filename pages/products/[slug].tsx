import React from "react";
import { FaStar } from "react-icons/fa";

const detail = ({ data }: any) => {
  // const products = [
  //   // {
  //   //   id: 1,
  //   //   name: "Giày Nike Air Force 1 07 LV8",
  //   //   price: 2000000,
  //   //   oldprice: 2500000,
  //   //   rating: 4,
  //   //   img: "/Images/giay1.png",
  //   //   imgs: [
  //   //     "/Images/giay1.png",
  //   //     "/Images/giay2.png",
  //   //     "/Images/giay3.png",
  //   //     "/Images/giay4.png",
  //   //   ],
  //   // },
  // ];

  // console.log(data);

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

  const addcart = () => {
    if (typeof document !== "undefined") {
      const input: any = document.querySelector("#input-amount");
      const amount = parseInt(input.value);
      const cart = {
        id: data.product[0].id,
        name: data.product[0].name,
        price: data.product[0].price,
        amount: amount,
        img: data.images[0],
      };
      const cartString = localStorage.getItem("cart");
      if (cartString) {
        const cartArray = JSON.parse(cartString);
        const index = cartArray.findIndex((item: any) => item.id === cart.id);
        if (index >= 0) {
          cartArray[index].amount += cart.amount;
        } else {
          cartArray.push(cart);
        }
        localStorage.setItem("cart", JSON.stringify(cartArray));
      } else {
        const cartArray = [cart];
        localStorage.setItem("cart", JSON.stringify(cartArray));
      }
    }
  };

  const content = data.product[0].content;
  return (
    <>
      <div className="detail-wraper">
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
            <select name="" id="">
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
            </select>
          </div>
          <div className="detail-color">
            <div className="detail-color-title">Màu:</div>
            <select name="" id="">
              <option value="">Đen</option>
              <option value="">Trắng</option>
              <option value="">Xanh</option>
              <option value="">Đỏ</option>
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
            <button className="detail-button-addcart-button">
              Thêm vào giỏ hàng
            </button>
          </div>
          <div className="detail-button-buy">
            <button className="detail-button-buy-button">Mua ngay</button>
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
