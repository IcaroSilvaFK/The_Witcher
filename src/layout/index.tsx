import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

import { Header } from "../components/Header";

export function Layout() {
  return (
    <Box
      width='100%'
      height='100vh'
      backgroundColor='primary'
      color='gray'
      fontFamily='poppins'
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
