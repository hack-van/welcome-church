import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import './Layout.scss';

const Layout = () => {
  const pageClassName = 'page';

  return (
    <div className={pageClassName}>
      <Header />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
