//import img from '../../assets/background/404.jpg';
import { Link } from 'react-router-dom';
import css from './notFound.module.scss';
const NotFound = () => {
  return (
    <div className={css.img__notFound}>
      <Link to="/">go to home</Link>
    </div>
  );
};

export default NotFound;
