import { Box } from "@chakra-ui/react";

import Landing from "../components/Landing";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Landing />
    </Box>
  );
};

export default Home;
