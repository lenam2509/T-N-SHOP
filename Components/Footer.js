import Link from 'next/link'
import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Cửa hàng</h4>
                            <ul>
                                <li><a href="#">thông tin</a></li>
                                <li><a href="/terms">Dịch vụ của chúng tôi</a></li>
                                <li><a href="/policy">chính sách bảo mật</a></li>
                                <li><a href="#">Chương trình liên kết</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Sự trợ giúp</h4>
                            <ul>
                                <li><a href="/insurance">Đổi hàng</a></li>
                                <li><a href="#">Giao hàng</a></li>
                                <li><a href="#">Trả hàng</a></li>
                                <li><a href="#">Thông tin hóa đơn</a></li>
                                <li><a href="#">Phương thức thanh toán</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Sản phẩm hot</h4>
                            <ul>
                                <li><a href="#">Giày</a></li>
                                <li><a href="#">Áo</a></li>
                                <li><a href="#">Quần</a></li>
                                <li><a href="#">Váy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Mạng xã hội</h4>
                            <div className="social-links">
                                <a href="#"><AiFillFacebook /></a>
                                <a href="#"><AiFillTwitterCircle /></a>
                                <a href="#"><AiFillInstagram /></a>
                                <a href="#"><AiFillLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer