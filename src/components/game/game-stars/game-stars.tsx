import React from 'react';
import { IconBase } from '@components/icon-base/icon-base';

import './game-stars.scss';
import { useSelector } from 'react-redux';
import { AppState } from '@store/index';

export const GameStars: React.FC = () => {
  const stars = useSelector((state: AppState) => state.game.stars);

  return (
    <div className="game__stars stars">
      {stars.map((star, index) => (
        <div className="stars__icon" key={index}>
          <IconBase
            name="icon-star"
            backgroundColor={star.isCorrect ? 'yellow' : 'black'}
          />
        </div>
      ))}
    </div>
  );
};
