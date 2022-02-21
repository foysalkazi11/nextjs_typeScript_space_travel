import React from "react";
import styles from "./LargeButton.module.css";

type LargeButtonProps = {
  style?: React.CSSProperties;
};

const LargeButton = ({ style }: LargeButtonProps) => {
  return (
    <a
      className={`bg-white text-dark fs-600 ff-serif uppercase ${styles.large_button}`}
      style={style}
    >
      Explore
    </a>
  );
};

export default LargeButton;
