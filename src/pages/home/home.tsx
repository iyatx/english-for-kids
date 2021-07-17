import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGameStarted } from '@store/actions/game-actions';
import CategoriesContainer from '@components/categories/categories-container';

import './home.scss';
import { AppState } from '@store/index';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const categoriesData = useSelector((state: AppState) => state.categories.categories);

  useEffect(() => {
    dispatch(toggleGameStarted(false));
  }, []);

  return (
    <div className="categories">
      <div className="container">
        <h2 className="categories__title text-lg">Categories</h2>
        <CategoriesContainer categories={categoriesData} />
      </div>
    </div>
  );
};
