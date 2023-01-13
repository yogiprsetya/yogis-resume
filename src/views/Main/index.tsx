import Education from './Education';
import Experience from './Experience';
import style from './Main.module.scss';

function Main() {
  return (
    <main>
      <section className={style.content}>
        <header className={style.content__header}>
          <h1 className={style.content__header__title}>Yogi Prasetya</h1>

          <p className={style.content__header__bio}>
            Software engineer with 4+ years of professional experiences in frontend development.
          </p>
        </header>

        <Experience />
        <Education />
      </section>
    </main>
  );
}

export default Main;
