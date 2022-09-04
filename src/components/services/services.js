import React, { useEffect, useRef, useState } from "react";
import c from "./services.module.scss";
import Linsa from "../../images/linsa.svg";
import Close from "../../images/Close.svg";
import Arrow from "../../images/Arrow.svg";
import ArrowRight from "../../images/ArrowRight.svg";
import Cart from "../../images/cart.svg";
import Plus from "../../images/plus.svg";
import Minus from "../../images/minus.svg";
import { defaultData } from "../../assets/dataset";

export const Services = () => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [search, setSearch] = useState("");
  const [isDryCleaner, setDryCleaner] = useState(false);
  const [activeFilter, setActiveFilter] =
    useState("dryCleaner");
  const [activeSubfilter, setActiveSubfilter] =
    useState(null);
  const [cartState, setCartState] = useState([]);

  const myRef = useRef(null);
  useEffect(() => {
    if (isInputFocus) {
      myRef.current.focus();
    }
  }, [isInputFocus, setIsInputFocus]);

  let data = defaultData;

  if (search) {
    data = data.filter((el) => el.title.includes(search));
  }
  if (activeFilter === "dryCleaner") {
    data = data.filter((el) => el.filter === "dryCleaner");
  }
  if (activeFilter === "aquaCleaner") {
    data = data.filter((el) => el.filter === "aquaCleaner");
  }
  if (activeFilter === "repair") {
    data = data.filter((el) => el.filter === "repair");
  }
  const addMoreToCart = (id) => {
    const getObject = cartState.find(
      (service) => service.id === id
    );
    const getItemIndex = cartState.findIndex(
      (service) => service.id === id
    );
    const phoneInCart = cartState[getItemIndex];
    setCartState((prev) => [
      ...prev,
      { [getObject]: getObject.count + 1 },
    ]);
  };
  return (
    <>
      <div className={c.container}>
        <h1>Услуги</h1>
        <div className={c.input_wrapper}>
          <div className={c.input_wrap}>
            <input
              placeholder="Поиск"
              className={
                search.length > 12 ? c.input_err : c.input
              }
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              ref={myRef}
              onBlur={() => setIsInputFocus(false)}
            />
            {!search ? (
              <img
                src={Linsa}
                alt="loop"
                className={c.linsa}
                onClick={() => setIsInputFocus(true)}
              />
            ) : (
              <img
                src={Close}
                className={c.linsa}
                alt="close"
                onClick={() => setSearch("")}
              />
            )}
          </div>
          {search.length > 12 ? (
            <p className={c.err}>Слишком длинный запрос</p>
          ) : null}
        </div>
      </div>
      {data.title}
      <div className={c.services_wrap}>
        <div className={c.sidebar}>
          <div
            className={
              activeFilter === "dryCleaner"
                ? c.filter_active
                : c.filter
            }
            onClick={() => {
              setActiveFilter("dryCleaner");
              setActiveSubfilter("");
            }}
          >
            Химчистка
            <img
              src={Arrow}
              alt="arrow"
              className={
                isDryCleaner ? c.arrow_reverse : c.arrow
              }
            />
          </div>
          {activeFilter === "dryCleaner" ? (
            <ul className={c.subfilter_wrap}>
              <li
                onClick={() =>
                  setActiveSubfilter("Accessories")
                }
              >
                Аксессуары
              </li>
              <li
                onClick={() =>
                  setActiveSubfilter("Outerwear")
                }
              >
                Верхняя одежда
              </li>
              <li
                onClick={() =>
                  setActiveSubfilter("BusinessSuit")
                }
              >
                Деловой костюм
              </li>
              <li
                onClick={() => setActiveSubfilter("Jeans")}
              >
                Джинса
              </li>
              <li
                onClick={() =>
                  setActiveSubfilter("Jackets")
                }
              >
                Куртка и пуховик
              </li>
              <li
                onClick={() => setActiveSubfilter("Coats")}
              >
                Пальто и плащ
              </li>
            </ul>
          ) : null}

          <div
            className={
              activeFilter === "aquaCleaner"
                ? c.filter_active
                : c.filter
            }
            onClick={() => {
              setActiveFilter("aquaCleaner");
              setActiveSubfilter("");
            }}
          >
            Аквачистка
            <img
              src={Arrow}
              alt="arrow"
              className={c.arrow}
            />
          </div>
          {activeFilter === "aquaCleaner" ? (
            <ul className={c.subfilter_wrap}>
              <li
                onClick={() =>
                  setActiveSubfilter("Accessories")
                }
              >
                Аксессуары
              </li>
              <li
                onClick={() =>
                  setActiveSubfilter("Outerwear")
                }
              >
                Верхняя одежда
              </li>
              <li
                onClick={() =>
                  setActiveSubfilter("BusinessSuit")
                }
              >
                Деловой костюм
              </li>
              <li
                onClick={() => setActiveSubfilter("Jeans")}
              >
                Джинса
              </li>
              <li
                onClick={() =>
                  setActiveSubfilter("Jackets")
                }
              >
                Куртка и пуховик
              </li>
              <li
                onClick={() => setActiveSubfilter("Coats")}
              >
                Пальто и плащ
              </li>
            </ul>
          ) : null}
          <div
            className={
              activeFilter === "repair"
                ? c.filter_active
                : c.filter
            }
            onClick={() => {
              setActiveFilter("repair");
              setActiveSubfilter("");
            }}
          >
            Ремонт одежды
            <img
              src={Arrow}
              alt="arrow"
              className={c.arrow}
            />
          </div>
          {activeFilter === "repair" ? (
            <ul className={c.subfilter_wrap}>
              <li
                onClick={() =>
                  setActiveSubfilter("Accessories")
                }
              >
                Аксессуары
              </li>
              <li
                onClick={() =>
                  setActiveSubfilter("Outerwear")
                }
              >
                Верхняя одежда
              </li>
              <li
                onClick={() =>
                  setActiveSubfilter("BusinessSuit")
                }
              >
                Деловой костюм
              </li>
              <li
                onClick={() => setActiveSubfilter("Jeans")}
              >
                Джинса
              </li>
              <li
                onClick={() =>
                  setActiveSubfilter("Jackets")
                }
              >
                Куртка и пуховик
              </li>
              <li
                onClick={() => setActiveSubfilter("Coats")}
              >
                Пальто и плащ
              </li>
            </ul>
          ) : null}
        </div>

        <div>
          <p className={c.text}>
            Из-за ежедневного использования повседневная
            одежда быстро изнашивается и нуждается в
            профессиональном уходе. То, что чаще носится,
            должно и чаще чиститься! Подбирать для
            повседневной одежды правильные программы
            обработки – это задача профессионалов.
          </p>
          {!activeSubfilter
            ? data.map((el) => (
                <div key={el.id} className={c.card}>
                  <div className={c.card_text}>
                    <p>{el.title}</p>
                    <div>
                      <span>Подробнее </span>
                      <img src={ArrowRight} alt="arrow" />
                    </div>
                  </div>
                  <div className={c.price_wrap}>
                    {el.price} ₽{console.log(cartState)}
                    {cartState.length < 1 ? (
                      <button
                        className={c.btn}
                        onClick={() =>
                          setCartState((prev) => [
                            ...prev,
                            el,
                          ])
                        }
                      >
                        <img src={Cart} alt="cart" />
                      </button>
                    ) : (
                      <div className={c.counter_wrap}>
                        <button>
                          <img src={Minus} alt="minus" />
                        </button>
                        {cartState.find(
                          (service) => service.id === el.id
                        )
                          ? cartState.find(
                              (service) =>
                                service.id === el.id
                            ).count
                          : 1}

                        <button
                          onClick={() =>
                            addMoreToCart(el.id)
                          }
                        >
                          <img src={Plus} alt="plus" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            : data
                .filter((el) => el.tag === activeSubfilter)
                .map((el) => (
                  <div key={el.id} className={c.card}>
                    <div className={c.card_text}>
                      <p>{el.title}</p>
                      <div>
                        <span>Подробнее </span>
                        <img src={ArrowRight} alt="arrow" />
                      </div>
                    </div>
                    <div className={c.price_wrap}>
                      {el.price} ₽
                      <button className={c.btn}>
                        <img src={Cart} alt="cart" />
                      </button>
                    </div>
                  </div>
                ))}
        </div>
      </div>
    </>
  );
};
