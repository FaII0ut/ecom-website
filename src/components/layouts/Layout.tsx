import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
