import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";

export default function Home() {
  const arr_slides = ["slide1.png", "slide2.png"];
  const danhmuc = [
    { name: "Áo", img: "danhmuc1.png" },
    { name: "Giày", img: "danhmuc2.png" },
    { name: "Quần", img: "danhmuc3.png" },
    { name: "Dép", img: "danhmuc4.png" },
  ];

  const giay = [
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
    { name: "Kappa giày lười nam 381951W", img: "giay1.png" },
  ];

  const dep = [
    { name: "NINU&NICK DÉP WOMEN NF2_W21005", img: "dep1.png" },
    { name: "NINU&NICK DÉP WOMEN NF2_W21005", img: "dep1.png" },
    { name: "NINU&NICK DÉP WOMEN NF2_W21005", img: "dep1.png" },
    { name: "NINU&NICK DÉP WOMEN NF2_W21005", img: "dep1.png" },
  ];

  const ao = [
    { name: "KAPPA ÁO THUN TAY NGẮN MEN 371G3FW", img: "ao1.png" },
    { name: "KAPPA ÁO THUN TAY NGẮN MEN 371G3FW", img: "ao1.png" },
    { name: "KAPPA ÁO THUN TAY NGẮN MEN 371G3FW", img: "ao1.png" },
    { name: "KAPPA ÁO THUN TAY NGẮN MEN 371G3FW", img: "ao1.png" },
  ];

  const quan = [
    { name: "KAPPA QUẦN SHORTS NAM 371G3FW", img: "quan1.png" },
    { name: "KAPPA QUẦN SHORTS NAM 371G3FW", img: "quan1.png" },
    { name: "KAPPA QUẦN SHORTS NAM 371G3FW", img: "quan1.png" },
    { name: "KAPPA QUẦN SHORTS NAM 371G3FW", img: "quan1.png" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(false);

  const nextSlide = () => {
    if (currentSlide === arr_slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const backSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(arr_slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <main>
      {/* slide show */}
      <div className="slide-show">
        <img src={"Images/" + arr_slides[currentSlide]} alt="" />
        <div className="next" onClick={nextSlide}>
          <BiSkipNextCircle />
        </div>
        <div className="back" onClick={backSlide}>
          <BiSkipPreviousCircle />
        </div>
      </div>
      {/* end */}

      {/* danh muc */}
      <div className="cate-feature">
        <strong className="name-box">Danh mục nổi bật</strong>
        <div className="box-cate ">
          <aside>
            {/* <h3>
              <a href="#">
                <div className="img-boxcate">
                  <img src="./Images/danhmuc1.png" alt="" />
                </div>
                <span>Đồ WorldCup</span>
              </a>
            </h3> */}
            {danhmuc.map((item, index) => {
              return (
                <h3 key={index}>
                  <a href="#">
                    <div className="img-boxcate">
                      <img src={"./Images/" + item.img} alt="" />
                    </div>
                    <span>{item.name}</span>
                  </a>
                </h3>
              );
            })}
          </aside>
        </div>
      </div>
      {/* end */}

      {/* Sản phẩm gợi ý */}
      <div className="product-sugges">
        {/* giay */}
        <div className="giay-wrap">
          <a href="#">
            <img src={"./Images/baner1.png"} />
          </a>
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
                  <img src={"./Images/"+item.img} alt="" />
                  </div>
                  <span>{item.name}</span>
                  <div className="giay-price">
                    <h3>200.000 ₫</h3> <h4>250.000 ₫</h4>
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="more-pro">
            <a href="#">Xem thêm sản phẩm</a>
          </div>
        </div>
        {/* dep */}
        <div className="giay-wrap">
          <a href="#">
            <img src={"./Images/baner2.png"} />
          </a>
          <div className="giay-grid">
            {dep.map((item, index) => {
              return (
                <div className="giay-flex" key={index}>
                 <Link href="#">
                  <div className="giay-img">
                  <img src={"./Images/"+item.img} alt="" />
                  </div>
                  <span>{item.name}</span>
                  <div className="giay-price">
                    <h3>200.000 ₫</h3> <h4>250.000 ₫</h4>
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="more-pro">
            <a href="#">Xem thêm sản phẩm</a>
          </div>
        </div>
        {/* ao */}
        <div className="giay-wrap">
          <a href="#">
            <img src={"./Images/baner3.png"} />
          </a>
          <div className="giay-grid">
            {ao.map((item, index) => {
              return (
                <div className="giay-flex" key={index}>
                  <Link href="#">
                  <div className="giay-img">
                  <img src={"./Images/"+item.img} alt="" />
                  </div>
                  <span>{item.name}</span>
                  <div className="giay-price">
                    <h3>200.000 ₫</h3> <h4>250.000 ₫</h4>
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="more-pro">
            <a href="#">Xem thêm sản phẩm</a>
          </div>
        </div>
        {/* quan */}
        <div className="giay-wrap">
          <a href="#">
            <img src={"./Images/baner4.png"} />
          </a>
          <div className="giay-grid">
            {quan.map((item, index) => {
              return (
                <div className="giay-flex" key={index}>
                  <Link href="#">
                  <div className="giay-img">
                    <img src={"./Images/"+item.img} alt="" />
                  </div>
                  <span>{item.name}</span>
                  <div className="giay-price">
                    <h3>200.000 ₫</h3> <h4>250.000 ₫</h4>
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="more-pro">
            <a href="#">Xem thêm sản phẩm</a>
          </div>
        </div>
      </div>
      {/* end */}
    </main>
  );
}
