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
const all = ({ data }: any) => {
  const products = data;
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
            {data === undefined ? (
              <div>Loading...</div>
            ) : (
              products.map((item: any, index: number) => {
                return (
                  <div className="giay-flex" key={index}>
                    <Link href={"/products/" + item.slug}>
                      <div className="giay-img">
                        <img
                          src={`https://api.trungthanhweb.com/images/${item.image
                            // cut string
                            .split("/")
                            .pop() // get last item
                            .split(".")[0] // get first item
                            .split()
                            .join(" ")}.webp`}
                          alt={
                            item.image
                              // cut string
                              .split("/")
                              .pop() // get last item
                              .split(".")[0] // get first item
                              .split("-")
                              .join(" ") + ".webp"
                          }
                        />
                      </div>
                      <span>{item.name}</span>
                      <div className="giay-price">
                        <h3>
                          {(
                            item.price -
                            (item.price * item.discount) / 100
                          ).toLocaleString("vi-VN")}{" "}
                          ₫
                        </h3>
                        {item.discount > 0 && (
                          <h4>{item.price.toLocaleString("vi-VN")} ₫</h4>
                        )}
                      </div>
                      <div className="giay-hot">
                        <AiFillFire />
                        HOT
                      </div>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default all;

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const res = await fetch(`https://api.trungthanhweb.com/api/highlightprod`);
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
