import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@store/index';
import GameStars from '@components/game/game-stars';
import GameContainer from '@components/game/game-container';

import './cards.scss';

export const CardsPage = (): React.ReactElement => {
  const cardsArray = useSelector((state: AppState) => state.cards.cards);
  const mode = useSelector((state: AppState) => state.app.mode);

  return (
    <div className="cards">
      <div className="cards__container container">
        <GameStars />
        <h2 className="text-lg">Train & Play</h2>
        <div className="cards__game game">
          <GameContainer cardsArray={cardsArray} mode={mode} />
        </div>
      </div>
    </div>
  );
};
