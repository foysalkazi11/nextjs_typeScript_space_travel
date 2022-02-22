import React, { Dispatch, SetStateAction } from "react";
import styles from "./Tab.module.css";

type TabProps = {
  text?: string;
  index?: number;
  active?: number;
  setActive?: Dispatch<SetStateAction<number>>;
  style?: React.CSSProperties;
};

const Tab = ({
  active = 0,
  index = 0,
  text = "Tab",
  setActive = () => {},
  style = {},
}: TabProps) => {
  return (
    <button
      className={`uppercase text-light bg-dark letter-spacing-2 ${
        styles.tabButton
      } ${active === index ? styles.active : ""}`}
      onClick={() => setActive(index)}
      style={style}
    >
      {text}
    </button>
  );
};

export default Tab;
