import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navigation.module.css";

const linkList = ["Active", "Hover", "Idle"];

const Navigation = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <nav>
        <ul
          className={`flex ${styles.primary_navigation} ${styles.underline_indicators} `}
        >
          {linkList?.map((link, index) => {
            return (
              <li
                className={`${active === index ? styles.active : ""}`}
                key={index}
                onClick={() => setActive(index)}
              >
                <Link href="#">
                  <a className={`uppercase text-white letter-spacing-2`}>
                    {link}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
