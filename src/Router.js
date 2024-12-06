import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, Outlet } from 'react-router-dom';

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Plans = lazy(() => import('./pages/Plans'));
const WebDevelopement = lazy(() => import('./pages/WebDevelopement'));
const Payment = lazy(() => import('./pages/Payment'));
const Business = lazy(() => import('./pages/Business'));
const C = lazy(() => import('./components/C'));
const Css = lazy(() => import('./components/Css'));
const Java = lazy(() => import('./components/Java'));
const Dsa = lazy(() => import('./components/Dsa'));
const Html = lazy(() => import('./components/Html'));
const MySql = lazy(() => import ('./components/Mysql'));
const Xml = lazy(() => import('./components/Xml'));
const Xyzz = lazy(() => import('./components/Xyzz'))



export const Router = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(localStorage.getItem('isAuthenticated')));

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    navigate('/');
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  useEffect(() => {
    setIsAuthenticated(Boolean(localStorage.getItem('isAuthenticated')));
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/business" element={<Business />} />

        <Route path="/webDevelopement" element={<WebDevelopement />}>
          <Route index element={<C />} />
          <Route path="css" element={<Css />} />
          <Route path="html" element={<Html/>} />
          <Route path="mysql" element={<MySql/>} />
          <Route path="xml" element={<Xml/>} />
          <Route path="java" element={<Java />} />
          <Route path="dsa" element={<Dsa/>} />
          <Route path="xyzz" element={<Xyzz/>} />
        </Route>
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>

        </Route>
      </Routes>
    </Suspense>
  );
};
export default Router;
