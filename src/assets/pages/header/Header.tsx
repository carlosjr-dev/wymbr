import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <section className={styles.headerModule}>
        <div className={styles.headerContent}>
          <div>
            <div className={styles.openBtn}>
              <p>Open to Work !</p>
            </div>
          </div>
          <h1>“Transformando ideias em obras-primas visuais”</h1>
          <h2>Somos a força criativa por trás da sua marca.</h2>
          <div>
            <button className={styles.hireBtn}>Hire today</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
