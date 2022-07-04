import React from "react";
import Logo from "../public/vercel.svg";
import Image from "next/image";
import css from "./layout.module.css";

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <header className={css.header}>
      <Image src={Logo} alt="" width={100} />
    </header>
  );
};

export default Header;
