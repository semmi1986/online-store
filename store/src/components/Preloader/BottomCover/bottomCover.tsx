import React from "react";
import style from "./bottomCover.module.css";
import classNames from "classnames";

function BottomCover() {
  return (
    <div className={classNames(style.bottom__cover)}>
      <span className={style.font}> </span>
    </div>
  );
}

export default BottomCover;
