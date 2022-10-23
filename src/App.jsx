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
import Login from './pages/Login';
import Layout from './components/Layout';
import DebugPage from './pages/DebugPage';
import NotifyChurches from './pages/NotifyChurches';

const App = () => {
  const isUserLogin = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={isUserLogin ? <HomePage /> : <Login />} />
          <Route path="/debug" element={<DebugPage />} />
          <Route path="/notify" element={<NotifyChurches />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
