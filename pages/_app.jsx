import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import '../public/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
