import Image from "next/image"
import img from '../assets/img-01.webp'

const contact = () => {
  return (
    <>
      <div className="contact_full">
        <div className="contact_container">
            <div className="contact_left">
                <div className="contact_info">
                    <div className="contact_header">
                        <h5 className="contact_title">LIÊN HỆ TRỰC TIẾP</h5>
                    </div>
                    <div className="contact_body">
                        <div className="contact_address">
                            <p>Văn phòng chính</p>
                            <p style={{ fontWeight: 'bold', paddingBottom: '10px' }}>52 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p>
                            <p>Tổng đài hỗ trợ CSKH (hoặc liên hệ công ty)</p>
                            <p style={{ fontWeight: 'bold' }}>1900 6941 - Các ngày trong tuần từ 8:00 - 21:00</p>
                        </div>
                        <div className='contact_direct'>
                            <div id="email">
                                <p>Email</p>
                                <a href="cskh@hoang-phuc.com">cskh@hoang-phuc.com</a>
                            </div>
                            <div id="website">
                                <p>Website</p>
                                <a href="http://hoang-phuc.com">http://hoang-phuc.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_image">
                    <Image src={img} alt='' width={380} />
                </div>
            </div>
            <div className="contact_right">
                <h5 className="contact_title" style={{ marginLeft:'20px' }}>LIÊN HỆ VỚI CHÚNG TÔI</h5>
                <form id="contact_formGroup">
                    <input type="text" placeholder="Email*"/>
                    <input type="text" placeholder="Họ và tên*"/>
                    <input type="text" placeholder="Điện thoại*"/>
                    <textarea placeholder="Nội dung liên hệ"></textarea>
                    <button type="submit" id="contact_submit">Gửi</button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default contact
