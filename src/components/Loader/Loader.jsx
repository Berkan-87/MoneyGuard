import { ClipLoader } from 'react-spinners';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <div className={s.backdrop}></div>
      <div className={s.loader}>
        <ClipLoader
          color="#ffd8d0"
          size={80}
          speedMultiplier={0.9}
          aria-label="loading-spinner"
        />
      </div>
    </>
  );
};

export default Loader;
