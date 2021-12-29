import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import MenuLegal from './MenuLegal';
import MenuPrimary from './MenuPrimary';

import '../../styles/sidebar.scss';

const Sidebar = () => {
  const [sidebarStatus, setSidebarStatus] = useState<'close' | 'open'>('close');
  const openSidebar = () => setSidebarStatus('open');
  const closeSidebar = () => setSidebarStatus('close');

  useEffect(() => {
    const escFunction = ({ key }: KeyboardEvent) => {
      if (key !== 'Escape') return;
      closeSidebar();
    };

    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  return (
    <div className="sidebar">
      <Helmet bodyAttributes={{ sidebar: sidebarStatus }} />

      <div className="sidebar-close">
        <svg
          version="1.1"
          id="hamberger"
          x="0px"
          y="0px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          onClick={openSidebar}
        >
          <path
            className="fillColor"
            d="M34,11.45H6c-0.8,0-1.45-0.65-1.45-1.45S5.2,8.55,6,8.55h28c0.8,0,1.45,0.65,1.45,1.45S34.8,11.45,34,11.45z"
          />
          <path
            className="fillColor"
            d="M34,21.45H6c-0.8,0-1.45-0.65-1.45-1.45S5.2,18.55,6,18.55h28c0.8,0,1.45,0.65,1.45,1.45S34.8,21.45,34,21.45z"
          />
          <path
            className="fillColor"
            d="M34,31.45H6c-0.8,0-1.45-0.65-1.45-1.45S5.2,28.55,6,28.55h28c0.8,0,1.45,0.65,1.45,1.45S34.8,31.45,34,31.45z"
          />
        </svg>
      </div>

      <div className="sidebar-open">
        <div className="sidebar-background bgColor" onClick={closeSidebar}></div>
        <div className="sidebar-content">
          <div className="sidebar-header"></div>
          <div className="sidebar-body">
            <MenuPrimary />
          </div>
          <div className="sidebar-footer borderColor">
            <MenuLegal />
          </div>
        </div>

        <div className="sidebar-button-close">
          <svg
            version="1.1"
            id="hamberger"
            x="0px"
            y="0px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            onClick={closeSidebar}
          >
            <path
              className="fillColor"
              d="M30,31.5c-0.38,0-0.77-0.15-1.06-0.44l-20-20c-0.59-0.59-0.59-1.54,0-2.12c0.59-0.59,1.54-0.59,2.12,0l20,20c0.59,0.59,0.59,1.54,0,2.12C30.77,31.35,30.38,31.5,30,31.5z"
            />
            <path
              className="fillColor"
              d="M10,31.5c-0.38,0-0.77-0.15-1.06-0.44c-0.59-0.59-0.59-1.54,0-2.12l20-20c0.59-0.59,1.54-0.59,2.12,0c0.59,0.59,0.59,1.54,0,2.12l-20,20C10.77,31.35,10.38,31.5,10,31.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
