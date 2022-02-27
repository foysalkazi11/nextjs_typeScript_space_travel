/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navigation.module.css";

const linkList = ["Active", "Hover", "Idle"];

const Navigation = () => {
  const [active, setActive] = useState(0);
  const [toggelNav, setToggleNav] = useState(false);
  return (
    <header className={`flex ${styles.primary_navigation_container}`}>
      <div>
        <Image
          src="/assets/shared/logo.svg"
          alt="space tourism logo"
          width={50}
          height={50}
          className={styles.logo}
        />
      </div>

      <nav className={styles.navContainer}>
        <button
          className={`${styles.mobile_nav_toggle}`}
          aria-controls="primary_navigation"
          onClick={() => setToggleNav((pre) => !pre)}
        >
          <img
            src={
              toggelNav
                ? "/assets//shared/icon-close.svg"
                : "/assets//shared/icon-hamburger.svg"
            }
            alt="toggle_icon"
          />
        </button>

        <ul
          className={`flex ${styles.primary_navigation} ${
            styles.underline_indicators
          } ${toggelNav ? "" : styles.open_mobile_menu}`}
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
    </header>
  );
};

export default Navigation;

{
  /* <span
            className="sr-only"
            aria-expanded={toggelNav ? "true" : "false"}
          >
            Menu
          </span> */
}
