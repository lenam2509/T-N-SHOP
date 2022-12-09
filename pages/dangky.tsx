import Link from "next/link";
import React from "react";

const dangky = () => {
  return (
    <>
      <div className="login-wraper">
        <h1>Đăng ký</h1>
        <div className="login">
          <div className="login-form">
            <form action="">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="name">Họ tên</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" name="password" id="password" required />
              </div>
              <div className="form-group">
                <label htmlFor="addres">Địa chỉ</label>
                <input
                  required
                  type="text"
                  name="addres"
                  id="addres"
                  placeholder="xin mời ghi rõ thành phố quận huyện, địa chỉ nhà"
                />
              </div>
              <div className="form-group">
                <input type="submit" value="Đăng ký" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default dangky;
