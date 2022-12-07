import "../styles/globals.css";
import "../styles/header.css"
import "../styles/footer.css"
import "../styles/slider.css"
import "../styles/danhmuc.css"
import "../styles/product-home.css"
import "../styles/product-detail.css"
import "../styles/all.css"
import type { AppProps } from "next/app";
import Layouts from "../Components/Layouts";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts title="ShopTN">
      <Component {...pageProps} />
    </Layouts>
  );
}

