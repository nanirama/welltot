import React, { FC } from 'react';
import HeaderContent from '../pageElements/HeaderContent';
import FooterContent from '../pageElements/FooterContent';
import CookiePolicyBanner from '../cookiePolicy/CookiePolicyBanner';
// Semantic stylesheets

import '../../styles/main.scss';
import '../../styles/LayoutMain.scss';

const LayoutMain: FC = ({ children }) => {
  return (
    <div className="page">
      <CookiePolicyBanner />
      <div className="page-content">
        <header className="page-header">
          <HeaderContent />
        </header>

        <main className="page-body">{children}</main>

        <footer className="page-footer">
          <FooterContent />
        </footer>
      </div>
    </div>
  );
};

export default LayoutMain;
