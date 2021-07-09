import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '@components/header';
import Footer from '@components/footer';
import HomePage from '@pages/home';
import CardsPage from '@pages/cards';
import { AppState } from '@store/index';
import StatisticsPage from '@pages/statistics';
import { DifficultPage } from './pages/difficult/difficult';

export const App: React.FC = () => {
  const isOpenedSidebar = useSelector(
    (state: AppState) => state.app.sidebarVisibility,
  );

  const history = useHistory();

  useEffect(() => {
    history.push('/categories');
  }, []);

  return (
    <div className={isOpenedSidebar ? 'overflowed' : ''}>
      <Header />
      <main className={isOpenedSidebar ? 'main main--overflowed' : 'main'}>
        <Switch>
          <Route path="/categories" exact>
            <HomePage />
          </Route>
          <Route path="/cards">
            <CardsPage />
          </Route>
          <Route path="/statistics">
            <StatisticsPage />
          </Route>
          <Route path="/difficult">
            <DifficultPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};
