import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleGameStarted } from '@store/actions/game-actions';
import CategoriesContainer from '@components/categories/categories-container';
import { categories } from '../../assets/cards';
import { ICategories } from 'interfaces';

import './home.scss';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const data: string[] = categories;

  const categoriesData: Array<ICategories> = data.map((item, imgIndex) => {
    return {
      title: item,
      active: false,
      imgIndex,
    };
  });

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
