import React, { useState } from 'react';
import { IconBase } from '@components/icon-base/icon-base';
import { ICard } from 'interfaces';

import './game-card.scss';
import { playAudio } from '@components/shared/play-audio';
import classNames from 'classnames';
import { useEffect } from 'react';
import { setTrainModeClick } from './../../shared/localstorage-clicks';
import { IWord } from '@interfaces/categories';
import { baseURL } from '../../../api';

interface Props {
  card: IWord;
  mode: string;
  findCard?: (card: ICard) => boolean;
}

export const GameCard: React.FC<Props> = ({ card, mode, findCard }) => {
  const { word, image, audioSrc, translation } = card;
  const [flipped, setFlipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setIsCorrect(false);
  }, [card, mode]);

  const flipCard = () => {
    setFlipped(true);
  };

  const onPlayAudioHandler = () => {
    if (mode === 'TRAIN') {
      playAudio(audioSrc);
      setTrainModeClick(card.word);
    }
    if (mode === 'PLAY' && findCard) {
      const isCorrect = findCard(card);
      setIsCorrect(isCorrect);
    }
  };

  return (
    <div
      className={classNames(
        'game__card card',
        { 'card--flipped': flipped },
        { 'card--correct': isCorrect },
      )}
      onMouseLeave={() => setFlipped(false)}
      onClick={onPlayAudioHandler}
    >
      <div className="card__container">
        <div className="card__front">
          <div className="card__img" style={
            {backgroundImage: `url('${baseURL}/${image}')`}
          } />
          <div className="card__desc">
            <h4 className="card__title text-sm">{word}</h4>
            <div className="card__flip-icon" onClick={flipCard}>
              <IconBase name="icon-repeat" />
            </div>
            <div className="card__volume-icon">
              <IconBase name="icon-volume" />
            </div>
          </div>
        </div>
        <div className="card__back">
          <div className="card__img" style={{
            backgroundImage: `url('${baseURL}/${image}')`
          }} />
          <div className="card__desc">
            <h4 className="card__title text-sm">{translation}</h4>
          </div>
          <div className="card__volume-icon">
            <IconBase name="icon-volume" />
          </div>
        </div>
      </div>
    </div>
  );
};
