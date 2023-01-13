import style from './Main.module.scss';

function Education() {
  return (
    <div className={style.content__spec}>
      <h2 className={style.content__spec__title}>EDUCATION</h2>

      <div className={style.content__spec__standing}>
        <strong>Esa Unggul,</strong>
        <span>Jakarta</span>
      </div>

      <article className={style.content__spec__desc}>
        <p>
          Informatics Engineering undergraduate program at the Faculty of computer science, major in
          software engineering, graduated with a GPA of 3.44.
        </p>
      </article>
    </div>
  );
}

export default Education;
