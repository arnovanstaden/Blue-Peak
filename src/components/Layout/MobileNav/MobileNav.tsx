import { useRef, useState } from 'react';
import styles from './MobileNav.module.scss';
import classNames from 'classnames';

const MobileNav = () => {
  const navRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen((prev) => {
      document.body.style.overflow = prev ? 'auto' : 'hidden';
      return !prev;
    });
  };

  const classes = classNames(styles.MobileNav, open && styles.open);

  return (
    <div className={classes} ref={navRef}>
      <button onClick={toggleNav}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 -960 960 960'
          width='24'
        >
          <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'></path>
        </svg>
      </button>
      <div className={styles.drawer}>
        <button onClick={toggleNav} className={styles.closeButton}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 -960 960 960'
            width='24'
          >
            <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
          </svg>
        </button>
        <nav>
          <a href='/'>Home</a>
          <a href='/services'>Services</a>
          <a href='/services'>Contact Us</a>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
