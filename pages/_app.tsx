import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Cart from "../components/Header/Cart";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header top={<Cart />}>
        <Navbar />
      </Header>
      <AnimatePresence
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
