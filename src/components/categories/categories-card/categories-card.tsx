import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ICategories } from '@interfaces/index';
import { cards } from '@assets/cards';
import { setCurrentCategory } from '@store/actions/cards-actions';

import './categories-card.scss';

export const CategoriesCard = (props: {
  card: ICategories;
}): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const img = cards[props.card.imgIndex][0].image;
  const { title } = props.card;

  const handleCategory = () => {
    dispatch(setCurrentCategory(title));
    history.push('/cards');
  };

  return (
    <div className="categories__card card" onClick={handleCategory}>
      <div className="card__container">
        <div className="card__front">
          <div
            className="card__img"
            style={{ backgroundImage: `url('../../assets/${img}')` }}
          />
          <div className="card__desc">
            <h4 className="card__title text-md">{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
