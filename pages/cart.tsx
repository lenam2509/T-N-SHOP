import React from "react";

const cart = () => {
  return (
    <>
      <div className="cart-wraper">
        <h1>Giỏ hàng</h1>
        <div className="project">
          <div className="shop">
            <div className="box">
              <img src="./Images/giay1.png" alt="" />
              <div className="content">
                <h3>Nike Air Force</h3>
                <h4>Giá: $40</h4>
                <p className="unit">
                  Số lượng: <input type="number" defaultValue={1} />
                </p>
                <p className="btn-area">
                  <span className="btn-remove">Xóa</span>
                </p>
              </div>
            </div>
          </div>
          <div className="right-bar">
            <p>
              <span>Tổng cộng</span>
              <span>$120</span>
            </p>
            <hr />
            <p>
              <span>Tiền ship </span>
              <span>$0</span>
            </p>
            <hr />
            <p>
              <span>Tổng tiền thanh toán</span>
              <span>$120</span>
            </p>
            <a href="#">Thanh toán</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default cart;
