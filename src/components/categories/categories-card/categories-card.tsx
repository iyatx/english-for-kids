import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCurrentCategory } from '@store/actions/categories-actions';

import './categories-card.scss';
import { ICategory } from '@interfaces/categories';
import { baseURL } from '../../../api';

interface Props {
  categoryData: ICategory;
}

const placeholderImage = 'assets/images/placeholder.jpg';

export const CategoriesCard: React.FC<Props> = ({ categoryData  }) => {
  const { category, words } = categoryData;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleCategory = () => {
    dispatch(setCurrentCategory(category));
    history.push('/cards');
  };

  const image = (): string => {
    const imgSrc = words[0]?.image;
    if (!imgSrc) return placeholderImage;

    return `${baseURL}/${imgSrc}`;
  }

  return (
    <div className="categories__card card" onClick={handleCategory}>
      <div className="card__container">
        <div className="card__front">
          <div
            className="card__img"
            style={{ backgroundImage: `url('${image()}')` }}
          />
          <div className="card__desc">
            <h4 className="card__title text-md">{category}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
