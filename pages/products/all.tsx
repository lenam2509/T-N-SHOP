import Link from "next/link";
import React from "react";
import $ from "jquery";
import { AiFillFilter } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
if (typeof window !== "undefined") {
  $(document).ready(function () {
    $(".toggle-filter").click(function () {
      $(".filter ul").slideToggle();
    });
  });
}
const all = () => {
  const giay = [
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
  ];

  return (
    <>
      <div className="filter">
        <div className="toggle-filter">
          <p>
            Lọc sản phẩm <AiFillFilter />
          </p>
        </div>
        <ul>
          <li>
            <p>Tất cả</p>
          </li>
          <li>
            <p>Đồ nam</p>
          </li>
          <li>
            <p>Đồ nữ</p>
          </li>
          <li>
            <p>Giày</p>
          </li>
          <li>
            <p>Dép</p>
          </li>
          <li>
            <p>Quần</p>
          </li>
          <li>
            <p>Áo</p>
          </li>
        </ul>
      </div>
      <div className="product-sugges">
        <div className="giay-wrap">
          <div className="giay-grid">
            {/* <div className="giay-flex">
              <div className="giay-img">
                <img src="./Images/giay1.png" alt="" />
              </div>
              <span>Kappa giày lười nam 381951W</span>
              <h3>200.000 ₫</h3>
            </div> */}
            {giay.map((item, index) => {
              return (
                <div className="giay-flex" key={index}>
                  <Link href="/products/detail">
                    <div className="giay-img">
                      <img src={"/Images/" + item.img} alt="" />
                    </div>
                    <span>{item.name}</span>
                    <div className="giay-price">
                      <h3>200.000 ₫</h3> <h4>250.000 ₫</h4>
                    </div>
                    {/* <div className="giay-hot">
                      <AiFillFire />HOT
                    </div> */}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default all;
