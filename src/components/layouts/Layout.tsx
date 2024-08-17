import React from "react";
import Nav from "./Nav";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
export default Layout;
