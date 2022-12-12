import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { AiFillHome } from 'react-icons/ai'
import { FaHotjar } from 'react-icons/fa'
import { AiOutlineOrderedList } from 'react-icons/ai'
import { FcSalesPerformance } from 'react-icons/fc'
import { AiFillPhone } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'
import $ from 'jquery'

// import header css




if (typeof window !== 'undefined') {
    $(document).ready(function () {
        $('.toggle').click(function () {
            $('ul').slideToggle();
        })
    });
}



const Header = () => {
    return (
        <>
            <div className="header">
                <nav>
                    <Image src="/Images/T&N.png" alt="" width={150} height={150} />
                    <div className="toggle">
                        <FaBars />
                    </div>
                    <div className="user-cart">
                        <Link href="#"><BiSearch /></Link>
                        <Link href="#"><FiUsers /></Link>
                    </div>
                    <ul>
                        <li><Link href="/"><AiFillHome /> Trang chủ</Link></li>
                        <li><Link href="/products/hot"> <FaHotjar /> Sản phẩm nổi bật </Link></li>
                        <li><Link href="/products/all"><AiOutlineOrderedList />  Tất cả sản phẩm</Link></li>
                        <li><Link href="#"><FcSalesPerformance /> Săn sale</Link></li>
                        <li><Link href="/contact"> <AiFillPhone /> Liên hệ</Link></li>
                        <li><Link href="/cart"><BsFillCartCheckFill /> Giỏ hàng</Link></li>
                        <li><Link href="/login"><BiLogIn/> Đăng nhập</Link></li>
                    </ul>

                </nav>
            </div>
        </>
    )
}

export default Header

