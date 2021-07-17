import GameCard from '@components/game/game-card';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@store/index';

import './difficult.scss';
import { IWord } from '@interfaces/categories';

export const DifficultPage: React.FC = () => {
  const words = useSelector((state: AppState) => state.statistics.items);
  const [items, setItems] = useState<IWord[]>([]);

  useEffect(() => {
    const difficultWords = words
      .filter((item) => item.percent > 0)
      .map(({ word, translation, image, audioSrc }) => {
        return { _id: 'null', categoryId: 'null', word, translation, image, audioSrc };
      });

    setItems(difficultWords);
  }, []);

  return (
    <div className="difficult container">
      <div className="container">
        <h2 className="text-lg">Difficult Words</h2>
        {items.length === 0 ? (
          <div className="difficult__not-words">
            <img src="assets/images/empty-page.jpg" alt="" />
          </div>
        ) : (
          <div className="difficult__container">
            {items.map((item, index) => (
              <GameCard card={item} mode="TRAIN" key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
