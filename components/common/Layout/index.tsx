import React from "react";
import Footer from "@/components/common/Layout/Footer";
import Header from "@/components/common/Layout/Header";
import { AppProvider } from "./context";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppProvider>
        <Header />
        {children}
        <Footer />
      </AppProvider>
    </>
  );
}

export default Layout;
