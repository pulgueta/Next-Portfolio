import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../public/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <ColorModeScript initialColorMode="light" />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
