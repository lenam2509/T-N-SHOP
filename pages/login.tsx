import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <>
      <div className="login-wraper">
        <h1>Đăng nhập</h1>
        <div className="login">
          <div className="login-form">
            <form action="">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className="form-group">
                <input type="submit" value="Đăng nhập" />
              </div>
            </form>
            <Link href="/dangky">Chưa có tài khoản mời bạn nhấn vô đây để đăng ký?</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
