import React from "react";
import Footer from "@/components/common/Layout/Footer";
import Header from "@/components/common/Layout/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
