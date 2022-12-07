import React from "react";
import { FaStar } from "react-icons/fa";
const detail = () => {
  const products = [
    {
      id: 1,
      name: "Giày Nike Air Force 1 07 LV8",
      price: 2000000,
      oldprice: 2500000,
      rating: 4,
      img: "/Images/giay1.png",
      imgs: [
        "/Images/giay1.png",
        "/Images/giay2.png",
        "/Images/giay3.png",
        "/Images/giay4.png",
      ],
    },
  ];
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
    img.src = products[0].imgs[index];
  };
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
        {products.map((product) => {
          return (
            <>
              <div className="detail-left" key={product.id}>
                <div className="detail-img">
                  <img src={product.img} alt="" />
                </div>
                <div className="img-select">
                  {product.imgs.map((img, index) => {
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
                <div className="detail-name">{product.name}</div>
                <div className="detail-rating">
                  <div className="detail-rating-star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="detail-rating-number">
                    {product.rating} đánh giá
                  </div>
                </div>
                <div className="detail-price">
                  {product.price.toLocaleString("vi-VN")}vnđ
                  <span className="old-price">
                    {product.oldprice.toLocaleString("vi-VN")}vnđ
                  </span>
                </div>
                <div className="detail-description">
                  <div className="detail-description-title">Mô tả:</div>
                  <div className="detail-description-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo velit sunt architecto possimus quas quia natus quasi
                    laudantium ex dolores autem libero commodi quaerat eveniet
                    fugiat, quod distinctio numquam similique.
                  </div>
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default detail;
