import style from './Main.module.scss';

function Courses() {
  return (
    <div className={style.content__spec}>
      <h2 className={style.content__spec__title}>COURSE & CERTIFICATION</h2>

      <article className={style.content__spec__desc}>
        <p>
          <strong>React Js Web Frontend</strong>
          <br />~ Sanbercode
        </p>

        <p>
          <strong>Frontend Developer Expert</strong>
          <br />~ Dicoding
        </p>

        <p>
          <strong>Progressive Web Apps</strong>
          <br />~ Dicoding
        </p>

        <p>
          <strong>Jr Programmer Certification</strong>
          <br />~ BNSP
        </p>
      </article>
    </div>
  );
}

export default Courses;
