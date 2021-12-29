import React from 'react';
import * as styles from './Header.module.scss';

const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      <h2 className={styles.title}>Tot Life</h2>
      <h4 className={styles.subtitle}>A Welltot Magazine</h4>
    </div>
  );
};

export default Header;
