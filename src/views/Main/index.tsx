import cn from 'classnames';
import Courses from './Courses';
import Education from './Education';
import Experience from './Experience';
import style from './Main.module.scss';
import Skills from './Skills';
import Social from './Social';
import Stack from './Stack';

function Main() {
  return (
    <main>
      <section className={cn(style.content, style.main)}>
        <header className={style.content__header}>
          <h1 className={style.content__header__title}>Yogi Prasetya</h1>

          <p className={style.content__header__bio}>
            Software engineer with 4+ years of professional experiences in frontend development.
          </p>
        </header>

        <Experience />
        <Education />
      </section>

      <aside className={cn(style.content, style.aside)}>
        <Social />
        <Skills />
        <Courses />
        <Stack />
      </aside>
    </main>
  );
}

export default Main;
