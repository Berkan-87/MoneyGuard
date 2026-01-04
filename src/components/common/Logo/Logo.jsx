import clsx from 'clsx';
import s from './Logo.module.css';

const Logo = ({ type }) => {
  return (
    <div className={clsx(s.logo, type === 'header' && s.headerLogo)}>
      <img
        // style={{ width, height, fontSize }}
        src="/goktas-logo.svg"
        alt="Göktaş Logo"
      />
      <h2 className={s.textLogo}>Göktaş</h2>
    </div>
  );
};

export default Logo;
