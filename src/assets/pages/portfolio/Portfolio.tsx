import { useRef, useEffect, useState } from "react";
import { portfolio } from "../../hook/portfolio";

import styles from "./Portfolio.module.css";

function Portfolio() {
  const carrossel = useRef<HTMLDivElement | null>(null);
  const [carrosselNumberAdd, setCarrosselNumberAdd] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setCarrosselNumberAdd(carrosselNumberAdd + 1);
      handdleAdd();
    }, 120);
  });

  const handdleAdd = () => {
    if (carrossel.current) {
      carrossel.current.scrollLeft += carrosselNumberAdd;
    }
  };

  return (
    <>
      <section className={styles.portfolioContent}>
        <div className={styles.portfolioNav} ref={carrossel}>
          {portfolio.map((item, index) => (
            <div
              style={{
                backgroundImage: `url(${item.url})`,
                backgroundSize: `cover`,
                borderRadius: `10px`,
                marginLeft: `15px`,
                width: `273px`,
                height: `340px`,
                display: `flex`,
                alignItems: `flex-end`,
                gap: `8px`,
                padding: `10px 10px`,
                flex: `none`,
              }}
            >
              <div className={styles.textAndIcon}>
                <p
                  key={index}
                  style={{
                    fontSize: `1.2rem`,
                    color: `#fff`,
                    margin: `10px 16px`,
                    textShadow: ` 1px 1px #00000058`,
                  }}
                >
                  {item.title}
                </p>
                <div className={styles.test}>
                  <p
                    style={{
                      textShadow: ` 1px 1px #00000058`,
                      color: `#fff`,
                      marginLeft: `16px`,
                      border: `1px solid #ffffff61`,
                      borderRadius: `100px`,
                      padding: `4px 20px `,
                    }}
                  >
                    {item.icon1}
                  </p>
                  <p
                    style={{
                      textShadow: ` 1px 1px #00000058`,
                      color: `#fff`,
                      marginLeft: `16px`,
                      border: `1px solid #ffffff61`,
                      borderRadius: `100px`,
                      padding: `4px 20px `,
                    }}
                  >
                    {item.icon2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handdleAdd}>Testar</button>
      </section>
    </>
  );
}

export default Portfolio;
