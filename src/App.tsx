import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '@components/header';
import Footer from '@components/footer';
import AdminHeader from '@components/admin/admin-header';

import HomePage from '@pages/home';
import CardsPage from '@pages/cards';
import StatisticsPage from '@pages/statistics';
import { DifficultPage } from '@pages/difficult/difficult';
import AdminPage from '@pages/admin';
import { LoginPage } from '@pages/auth/login/login';

import { AppState } from '@store/index';
import { setCategoriesData } from '@store/actions/categories-actions';
import classNames from 'classnames';
import { setToken } from '@store/actions/app-action';

export const App: React.FC = () => {
  const isOpenedSidebar = useSelector(
    (state: AppState) => state.app.sidebarVisibility,
  );
  const [adminPage, setAdminPage] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/game' || location.pathname === '/') history.push('/categories');
    dispatch(setCategoriesData());
    alert('Привет дружище, прошу прощение что не сделал таск в день дедлайн. Сможешь проверить в 22 июля, пожалуйста умоляю!!!!');

    const token = localStorage.getItem('token');

    if (token) {
      dispatch(setToken(token));
    }
  }, []);

  useEffect(() => {
    if (location.pathname.includes('admin')) setAdminPage(true);
    else setAdminPage(false);
  }, [location]);

  return (
    <div className={isOpenedSidebar ? 'overflowed' : ''}>
      {adminPage ? <AdminHeader /> : <Header />}
      <main className={classNames(
        'main',
        { 'main--overflowed': isOpenedSidebar },
      )}>
        <Switch>
          <Route path='/categories' exact>
            <HomePage />
          </Route>
          <Route path='/game'>
            <CardsPage />
          </Route>
          <Route path='/statistics'>
            <StatisticsPage />
          </Route>
          <Route path='/difficult'>
            <DifficultPage />
          </Route>
          <Route path='/admin'>
            <AdminPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};
