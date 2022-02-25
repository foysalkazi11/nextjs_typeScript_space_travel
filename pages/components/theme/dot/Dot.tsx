import React, { Dispatch, SetStateAction } from "react";
import styles from "./Dot.module.css";

type DotProps = {
  index?: number;
  active?: number;
  setActive?: Dispatch<SetStateAction<number>>;
  style?: React.CSSProperties;
};

const Dot = ({
  active = 0,
  index = 0,
  setActive = () => {},
  style = {},
}: DotProps) => {
  return (
    <button
      className={`${styles.dot_indicator} ${
        active === index ? styles.active : ""
      }`}
      onClick={() => setActive(index)}
      style={style}
    >
      <span className="sr-only">Slide title</span>
    </button>
  );
};

export default Dot;
