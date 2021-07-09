import GameCard from '@components/game/game-card';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@store/index';
import { ICard } from '@interfaces/index';

import './difficult.scss';

export const DifficultPage = () => {
  const mode = useSelector((state: AppState) => state.app.mode);
  const words = useSelector((state: AppState) => state.statistics.items);

  const [items, setItems] = useState<ICard[]>([]);

  useEffect(() => {
    const difficultWords = words
      .filter((item) => item.percent > 0)
      .map(({ word, translation, image, audioSrc }) => {
        return { word, translation, image, audioSrc };
      });

    setItems(difficultWords);
  }, []);

  return (
    <div className="difficult container">
      <h2 className="text-lg">Difficult Words</h2>
      {items.length === 0 ? (
        <div className="difficult__not-words">
          <img src="assets/images/empty-page.jpg" alt="" />
        </div>
      ) : (
        <div className="difficult__container">
          {items.map((item, index) => (
            <GameCard card={item} mode={mode} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
