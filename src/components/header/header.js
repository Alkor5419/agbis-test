import React, { useState } from "react";
import classes from "./header.module.scss";
import Facebook from "../../images/Fb.svg";
import Instagram from "../../images/insta.svg";
import Viber from "../../images/Viber.svg";
import Whatsapp from "../../images/Whatsapp.svg";
import WhiteArrow from "../../images/white-arrow.svg";
import Burger from "../../images/Burger.svg";

import cn from "classnames";

export const Header = () => {
  const [isActiveSelector, setIsActiveSelector] =
    useState(false);
  const [currentSelector, setCurrentSelector] =
    useState("RU");
  const handleSelector = () => {
    setIsActiveSelector(!isActiveSelector);
  };

  return (
    <header>
      <div className={classes.header}>
        <div className={classes.container}>
          <div className={classes.socials}>
            <a href="tel:+37322838787">
              +(373) 22 83-87-87
            </a>
            <div className={classes.line}></div>
            <div>
              <img
                src={Instagram}
                className={classes.logo}
                alt="Instagram"
              />
              <img
                src={Facebook}
                className={classes.logo}
                alt="Facebook"
              />
              <img
                src={Viber}
                className={classes.logo}
                alt="Viber"
              />
              <img
                src={Whatsapp}
                className={classes.logo}
                alt="Whatsapp"
              />
            </div>
          </div>
          {!isActiveSelector ? (
            <div
              className={classes.langs}
              onClick={handleSelector}
            >
              {currentSelector}
              <img
                src={WhiteArrow}
                className={classes.white_arrow}
                alt="WhiteArrow"
              />
            </div>
          ) : (
            <div className={classes.dropdawn_wrap}>
              <div className={classes.dropdawn}>
                <div
                  onClick={() => {
                    setCurrentSelector("RU");
                    setIsActiveSelector(false);
                  }}
                  className={cn(
                    `${classes.lang} ${classes.border}`
                  )}
                >
                  RU
                </div>
                <div
                  onClick={() => {
                    setCurrentSelector("ENG");
                    setIsActiveSelector(false);
                  }}
                  className={cn(
                    `${classes.lang} ${classes.border}`
                  )}
                >
                  ENG
                </div>
                <div
                  onClick={() => {
                    setCurrentSelector("MOL");
                    setIsActiveSelector(false);
                  }}
                  className={classes.lang}
                >
                  MOL
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={classes.header__burger}>
        <div
          className={cn(
            `${classes.container} ${classes.burger_container}`
          )}
        >
          <img
            src={Burger}
            className={classes.burger}
            alt="Burger"
          />
          <div className={classes.logo_wrap}>
            <p className={classes.logo_title}>YOUR LOGO</p>
            <p className={classes.logo_subtitle}>
              ADDITIONAL TEXT
            </p>
          </div>

          <div className={classes.input_wrap}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 27L22.514 22.506M25 16.5C25 18.7543 24.1045 20.9163 22.5104 22.5104C20.9163 24.1045 18.7543 25 16.5 25C14.2457 25 12.0837 24.1045 10.4896 22.5104C8.89553 20.9163 8 18.7543 8 16.5C8 14.2457 8.89553 12.0837 10.4896 10.4896C12.0837 8.89553 14.2457 8 16.5 8C18.7543 8 20.9163 8.89553 22.5104 10.4896C24.1045 12.0837 25 14.2457 25 16.5V16.5Z"
                stroke="#343434"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Прайс-лист
          </div>
        </div>
      </div>
    </header>
  );
};
