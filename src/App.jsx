import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Layout from './components/Layout';
import SelectChurches from './pages/SelectCurches';
import DebugPage from './pages/DebugPage';
import NotifyChurches from './pages/NotifyChurches';
import RegistrationForm from './pages/RegistrationForm';
import ViewApplication from './components/ViewApplication';
import NotifiedChurch from './components/NotifiedChurch';

const App = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              isUserLogin
                ? <HomePage />
                : <Login handleUserLogin={setIsUserLogin} />
            }
          />
          <Route path="/notified-church" element={<NotifiedChurch />}/>
          <Route path="/view-application" element={<ViewApplication />}/>
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/select-churches" element={<SelectChurches />} />
          <Route path="/debug" element={<DebugPage />} />
          <Route path="/notify" element={<NotifyChurches />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
