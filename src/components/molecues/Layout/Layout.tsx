import { ReactNode } from "react";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};
