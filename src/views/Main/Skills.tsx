import style from './Main.module.scss';

function Skills() {
  return (
    <div className={style.content__spec}>
      <h2 className={style.content__spec__title}>Skills</h2>

      <article className={style.content__spec__desc}>
        <ul className="list-disc ml-4 leading-6">
          <li>
            <strong>Javascript</strong> (advance)
          </li>
          <li>
            <strong>Typescript</strong> (intermediate)
          </li>
          <li>
            <strong>SASS</strong> (advance)
          </li>
          <li>
            <strong>API Integration</strong> (advance)
          </li>
        </ul>
      </article>
    </div>
  );
}

export default Skills;
