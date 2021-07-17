import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@store/index';
import GameStars from '@components/game/game-stars';
import GameContainer from '@components/game/game-container';

import './cards.scss';

export const CardsPage = (): React.ReactElement => {
  const currentCategory = useSelector((state: AppState) => state.categories.currentCategory);
  const mode = useSelector((state: AppState) => state.app.mode);

  return (
    <div className="cards">
      <div className="cards__container container">
        <GameStars />
        <h2 className="text-lg">Train & Play</h2>
        <div className="cards__game game">
          { currentCategory?.words && <GameContainer words={currentCategory.words} mode={mode} /> }
        </div>
      </div>
    </div>
  );
};
