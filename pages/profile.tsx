import { BiLock } from "react-icons/bi";
import { BsShieldLock } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const profile = () => {
  return (
    <div className="profile_full">
      <div className="profile_container">
        <div className="profile_info">
          <div className="profile_left">
            <p className="profile_title">Thông tin cá nhân</p>
            <form>
              <div className="profile_form">
                <label style={{ marginRight: "15%" }}>Họ & Tên</label>
                <input type="text" value="Nguyễn Trọng Nhân" />
              </div>
              <div className="profile_form">
                <label style={{ marginRight: "14%" }}>Nickname</label>
                <input type="text" value="nhannt.dev" />
              </div>
              <div id="profile_form">
                <label>Giới tính</label>
                <div className="profile_select">
                  <div className="profile_radio">
                    <input type="radio" name="gender" value={"male"} checked />
                    <span>Nam</span>
                  </div>
                  <div className="profile_radio">
                    <input type="radio" name="gender" value={"female"} />
                    <span>Nữ</span>
                  </div>
                  <div className="profile_radio">
                    <input type="radio" name="gender" value={"other"} />
                    <span>Khác</span>
                  </div>
                </div>
              </div>
              <div className="profile_form">
                <label style={{ marginRight: "10%" }}>Số điện thoại</label>
                <input type="text" value="035xxxx" />
              </div>
              <div className="profile_form">
                <label style={{ marginRight: "10%" }}>Địa chỉ email</label>
                <input type="text" value="nhanntps18260@fpt.edu.vn" />
              </div>
              <div className="profile_submit">
                <button type="submit">Lưu thay đổi</button>
              </div>
            </form>
          </div>
          <div className="profile_right">
            <p className="profile_title">Bảo mật</p>
            <div className="profile_changePassword">
              <BiLock
                size={25}
                style={{ marginRight: "15px", paddingLeft: "5px" }}
              />
              Đổi mật khẩu
              <button
                className="profile_update"
                style={{ marginLeft: "140px" }}
              >
                Cập nhật
              </button>
            </div>
            <div className="profile_changePassword">
              <BsShieldLock
                size={25}
                style={{ marginRight: "15px", paddingLeft: "5px" }}
              />
              Thiết lập mã PIN
              <button
                className="profile_update"
                style={{ marginLeft: "118px" }}
              >
                Cập nhật
              </button>
            </div>

            <p className="profile_title">Liên kết mạng xã hội</p>
            <div className="profile_changePassword">
              <BsFacebook
                color="blue"
                size={25}
                style={{ marginRight: "15px", paddingLeft: "5px" }}
              />
              Facebook
              <button
                className="profile_update"
                style={{ marginLeft: "166px" }}
              >
                Cập nhật
              </button>
            </div>
            <div className="profile_changePassword">
              <FcGoogle
                size={25}
                style={{ marginRight: "15px", paddingLeft: "5px" }}
              />
              Google
              <button
                className="profile_update"
                style={{ marginLeft: "181px" }}
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
