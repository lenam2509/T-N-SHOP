import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiFillApple,
} from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

const register = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="register_full">
        <div className="register_container">
          <div className="register_form">
            <h2 className="register_title">Đăng Ký</h2>
            <form>
              <input type="text" placeholder="Email" id="register_username" />
              <input
                type="text"
                placeholder="địa chỉ nhà"
                id="register_address"
                className="register_address"
              />
              <input
                type="number"
                placeholder="số điện thoại"
                id="register_phone"
                className="register_phone"
              />
              <div className="register_eyes">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  id="register_password"
                />
                <span id="register_eye" onClick={handleShow}>
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={23} />
                  ) : (
                    <AiOutlineEye size={23} />
                  )}
                </span>
              </div>
              <button type="submit" className="register_submit">
                đăng ký
              </button>
            </form>
            {/* <div className="register_forgot">
              <a href="/forgot" id="register_forgot">
                Quên mật khẩu
              </a>
            </div> */}
            <br />
            <hr />
            <div id="or">hoặc</div>
            <div id="register_methods">
              <button id="register_facebook">
                <BsFacebook
                  color="blue"
                  size="32px"
                  style={{ paddingTop: "0.25rem" }}
                />
                <p className="register_method">Facebook</p>
              </button>
              <button id="register_google">
                <FcGoogle size="32px" style={{ paddingTop: "0.25rem" }} />
                <p className="register_method">Google</p>
              </button>
              <button id="register_apple">
                <AiFillApple size="32px" style={{ paddingTop: "0.25rem" }} />
                <p className="register_method">Apple</p>
              </button>
            </div>
            <div className="register_supports">
              Bạn mới biết đến{" "}
              <Link href="/" id="register_home">
                T&N SHOP?
              </Link>
              <Link href="/register" id="register_noAccount">
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
