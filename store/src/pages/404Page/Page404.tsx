import React, { useState, useEffect } from "react";
import style from "./Page404.module.css";
import classNames from "classnames";



const Page404: React.FC = () => {
  return (
    <div>
      <div className={style.header}>
        <span className={style.rainbowanimated}>ERROR 404</span>
      </div>
      <div className={style.goHome}><a href="/">Home Page</a></div>
    </div>
  );
};

export default Page404;