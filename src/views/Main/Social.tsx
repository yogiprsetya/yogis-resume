/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import cn from 'classnames';
import Link from 'next/link';
import style from './Main.module.scss';

const CONTENT = [
  {
    icon: '/icon/brands.svg#square-whatsapp',
    link: 'https://wa.me/6283873087154'
  },
  {
    icon: '/icon/brands.svg#linkedin',
    link: 'https://www.linkedin.com/in/yogiprasetya'
  },
  {
    icon: '/icon/brands.svg#square-github',
    link: 'https://github.com/yogiprsetya'
  },
  {
    icon: '/icon/brands.svg#square-rss',
    link: 'https://medium.com/@yogiprsetya'
  }
];

type Props = {
  className?: string;
};

function Social({ className }: Props) {
  return (
    <div className={cn(style.content__spec, style.personal, className)}>
      <div className={style.personal__socmed}>
        {CONTENT.map((v, i) => (
          <Link key={i} href={v.link} target="_blank">
            <svg>
              <use xlinkHref={v.icon} />
            </svg>
          </Link>
        ))}
      </div>

      <div className={style.personal__contact}>
        <Link href="tel:083873087154">0838 7308 7154</Link>
        <Link href="mailto:yogiprsetya@gmail.com">yogiprsetya@gmail.com</Link>
      </div>
    </div>
  );
}

export default Social;
