import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <nav>
        <ul
          className={`flex ${styles.primary_navigation} ${styles.underline_indicators} `}
        >
          <li className={`${active === 0 ? styles.active : ""}`}>
            <Link href="#">
              <a className={`uppercase text-white letter-spacing-2`}>Acitve</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={`uppercase text-white letter-spacing-2`}>Hover</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={`uppercase text-white letter-spacing-2`}>Idle</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
