import cn from 'classnames';
import style from './Main.module.scss';

function Experience() {
  return (
    <div className={style.content__spec}>
      <h2 className={style.content__spec__title}>Experience</h2>

      <div className={style.content__spec__standing}>
        <strong>metaNesia,</strong>

        <span>
          Jakarta — <i>Frontend engineer lead</i>
        </span>
      </div>

      <div className={style.content__spec__time}>Des 2022 - PRESENT</div>

      <article className={cn(style.content__spec__desc, 'mb-6')}>
        <p>Team and product migration. Designing architecture for front-end repositories.</p>
      </article>

      {/*  */}

      <div className={style.content__spec__standing}>
        <strong>Smarteye.id,</strong>

        <span>
          Jakarta — <i>Software engineer (frontend)</i>
        </span>
      </div>

      <div className={style.content__spec__time}>Feb 2019 - Des 2022</div>

      <article className={style.content__spec__desc}>
        <p>
          Initiate web core platform based on atomic design methodologies. Build and automation web
          apps development to achieve testable UI “platforms”.
        </p>
        <p>Boost development cycle efficiency and speed-up delivery project-based apps.</p>
        <p>Reduce inconsistency workflow with in-house tools distribution.</p>
      </article>
    </div>
  );
}

export default Experience;
