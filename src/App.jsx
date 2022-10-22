import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  // Link,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';

const App = () =>
  (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="child" element={<ChildComponent />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
;

export default App;
