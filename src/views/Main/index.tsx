import style from './Main.module.scss';

const Main = () => {
  return (
    <main>
      <section className={style.content}>
        <header className={style.content__header}>
          <h1 className={style.content__header__title}>Yogi Prasetya</h1>

          <p className={style.content__header__bio}>
            Software engineer with 4+ years of professional experiences in
            frontend development.
          </p>
        </header>

        <div className={style.content__spec}>
          <h2 className={style.content__spec__title}>Experience</h2>

          <div className={style.content__spec__standing}>
            <strong className={style.content__spec__subtitle}>
              Smarteye.id,
            </strong>

            <span>Jakarta — Software engineer (frontend)</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
