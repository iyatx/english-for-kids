import React, { useEffect } from 'react';
import { ICategories } from '@interfaces/index';
import CategoriesCard from '@components/categories/categories-card';
import './categories-container.scss';
import { useSelector } from 'react-redux';
import { AppState } from '@store/index';
import classNames from 'classnames';
import { ICategory } from '@interfaces/categories';

interface Props {
  categories: ICategory[];
}

export const CategoriesContainer: React.FC<Props> = ({ categories }) => {
  const mode = useSelector((state: AppState) => state.app.mode);

  return (
    <>
      <div
        className={classNames('categories__container', {
          'play-mode': mode === 'PLAY',
        })}
      >
        {categories.map((category) => (
          <CategoriesCard categoryData={category} key={category._id} />
        ))}
      </div>
    </>
  );
};
