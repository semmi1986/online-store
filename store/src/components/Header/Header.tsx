
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import style from "./header.module.css";
import Shop from "../Shop/Shop";

interface HeaderProps{
  counter: number
  totalPrice: number
}

const Header: React.FC<HeaderProps> = ({counter, totalPrice}) => {

  return (
    <header className={style.header}>
      <div className={style.header__inner}>
        <Link to="/">
          <div className={style.header__logo}></div>
        </Link>
        <div>
          <div className={classNames(style.header_counter, style.font)}>
            <div>
              Cart total:{" "}
              <span className={style.second_font}>€{totalPrice}</span>
            </div>
          </div>
        </div>
        <Link to="basket">
          <Shop counter={counter}/>
        </Link>
      </div>
    </header>
  );
}

export default Header;
