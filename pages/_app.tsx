import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Cart from "../components/Header/Cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header top={<Cart />}>
        <Navbar />
      </Header>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
