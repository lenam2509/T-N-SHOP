import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiFillApple,
} from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="login_full">
        <div className="login_container">
          <div className="login_form">
            <h2 className="login_title">Đăng nhập</h2>
            <form>
              <input type="text" placeholder="Email" id="login_username" />
              <div className="login_eyes">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  id="login_password"
                />
                <span id="login_eye" onClick={handleShow}>
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={23} />
                  ) : (
                    <AiOutlineEye size={23} />
                  )}
                </span>
              </div>
              <button type="submit" className="login_submit">
                đăng nhập
              </button>
            </form>
            <div className="login_forgot">
              <Link href="/forgot" id="login_forgot">
                Quên mật khẩu
              </Link>
            </div>
            <hr />
            <div id="or">hoặc</div>
            <div id="login_methods">
              <button id="login_facebook">
                <BsFacebook
                  color="blue"
                  size="32px"
                  style={{ paddingTop: "0.25rem" }}
                />
                <p className="login_method">Facebook</p>
              </button>
              <button id="login_google">
                <FcGoogle size="32px" style={{ paddingTop: "0.25rem" }} />
                <p className="login_method">Google</p>
              </button>
              <button id="login_apple">
                <AiFillApple size="32px" style={{ paddingTop: "0.25rem" }} />
                <p className="login_method">Apple</p>
              </button>
            </div>
            <div className="login_supports">
              Bạn mới biết đến{" "}
              <Link href="/" id="login_home">
                T&N SHOP?
              </Link>
              <Link href="/register" id="login_noAccount">
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
