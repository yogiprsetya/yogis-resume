/* eslint-disable react/no-array-index-key */
import style from './Main.module.scss';

const CONTENT = [
  {
    tech: 'React',
    level: 'advance'
  },
  {
    tech: 'Nextjs',
    level: 'advance'
  },
  {
    tech: 'Redux Toolkit',
    level: 'intermediate'
  },
  {
    tech: 'Linting tool',
    level: 'advance'
  },
  {
    tech: 'Testing Library',
    level: 'advance'
  },
  {
    tech: 'ThreeJS',
    level: 'beginner'
  }
];

function Stack() {
  return (
    <div className={style.content__spec}>
      <h2 className={style.content__spec__title}>Stack</h2>

      <article className={style.content__spec__desc}>
        <ul className="list-disc ml-4 leading-6">
          {CONTENT.map((v, i) => (
            <li key={i}>
              <strong>{v.tech}</strong> ({v.level})
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default Stack;
