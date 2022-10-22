import React, { useState } from 'react';
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

const App = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              isUserLogin ? (
                <HomePage />
              ) : (
                <Login handleUserLogin={setIsUserLogin} />
              )
            }
          />
          <Route path="/debug" element={<DebugPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
