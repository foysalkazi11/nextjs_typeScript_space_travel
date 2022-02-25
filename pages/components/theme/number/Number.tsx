import React, { Dispatch, SetStateAction } from "react";
import styles from "./Number.module.css";

type NumberProps = {
  number?: number;
  index?: number;
  active?: number;
  setActive?: Dispatch<SetStateAction<number>>;
  style?: React.CSSProperties;
};

const Number = ({
  active = 0,
  index = 0,
  number = 1,
  setActive = () => {},
  style = {},
}: NumberProps) => {
  return (
    <button
      className={`${styles.number_indicator} ${
        active === index ? styles.active : ""
      }`}
      onClick={() => setActive(index)}
      style={style}
    >
      {number}
    </button>
  );
};

export default Number;
