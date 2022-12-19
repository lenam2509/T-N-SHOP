import React, { useState, useEffect } from "react";

const cart = () => {
  // get cart from localstorage
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cart, setCart] = useState<any>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart !== null) {
      setCart(JSON.parse(cart));
    }
  }, []);

  const removeItem = (id: number) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = cart.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCart(cart);
    }
  };

  return (
    <>
      <div className="cart-wraper">
        <h1>Giỏ hàng</h1>
        <div className="project">
          {/* <div className="shop">
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
          </div> */}
          <div className="shop">
            {cart === null || cart.length === 0 || cart === undefined ? (
              <h3>Không có sản phẩm</h3>
            ) : (
              cart?.map((item: any, key: number) => {
                return (
                  <div className="box" key={key}>
                    <img src={item.image} alt="" />
                    <div className="content">
                      <h3>{item.name}</h3>
                      <h4>Màu: {item.color}</h4>
                      <h4>Kích cỡ: {item.size}</h4>
                      <h4>Giá: {item.price.toLocaleString("vi-VN")} vnđ</h4>
                      <p className="unit">
                        Số lượng:{" "}
                        <input
                          type="number"
                          id="input-amount"
                          defaultValue={item.amount}
                          readOnly
                        />
                      </p>
                      <p className="btn-area">
                        <span
                          className="btn-remove"
                          onClick={() => removeItem(item.id)}
                        >
                          Xóa
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="right-bar">
            <p>
              <span>Tổng cộng</span>
              <span>
                {cart
                  ?.reduce((total: number, item: any) => {
                    return total + item.price;
                  }, 0)
                  .toLocaleString("vi-VN")}
              </span>
            </p>
            <hr />
            <p>
              <span>Tiền ship </span>
              <span>0</span>
            </p>
            <hr />
            <p>
              <span>Tổng tiền thanh toán</span>
              <span>
                {cart
                  ?.reduce((total: number, item: any) => {
                    return total + item.price;
                  }, 0)
                  .toLocaleString("vi-VN")}{" "}
                vnđ
              </span>
            </p>
            {
              // user is not login
              <a href="">Đăng nhập để thanh toán</a>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default cart;
