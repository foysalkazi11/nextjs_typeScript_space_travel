import React from "react";
import LargeButton from "../../theme/largeButton/LargeButton";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`grid_container grid-container--home ${styles.home}`}>
      <div>
        <h1
          className={`uppercase letter-spacing-1 text-light ff-sans-cond fs-500`}
        >
          So, you want to travel to{" "}
          <span className={`d_block fs-900 text-white ff-serif`}>Space</span>{" "}
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <LargeButton />
      </div>
    </div>
  );
};

export default Home;
