import React from "react";
import { MainHeader } from "./styled";

const Header = ({ title }) => (
  <header>
    <MainHeader>{title}</MainHeader>
  </header>
);

export default Header;
