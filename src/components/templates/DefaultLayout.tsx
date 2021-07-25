import { VFC } from "react";
import { Footer } from "../molecules/layout/Footer";
import { Header } from "../atoms/layout/Header";

type PropsType = {
  children: any;
};

export const DefaultLayout: VFC<PropsType> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer fixed={false} />
    </>
  );
};
