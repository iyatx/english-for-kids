import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '@store/index';
import { getMistakes, toggleGameStarted } from '@store/actions/game-actions';
import { addStar, clearStars } from '@store/actions/game-actions';

import GameButtons from '@components/game/game-buttons';
import GameCard from '@components/game/game-card';
import { playAudio } from '@components/shared/play-audio';
import { ICard } from '@interfaces/index';

import './game-container.scss';
import GameEnd from '../game-end';
import { resetGame } from './../../../store/actions/game-actions';
import {
  setFailItem,
  setPlayModeClick,
} from '@components/shared/localstorage-clicks';

interface Props {
  cardsArray: ICard[];
  mode: string;
}

const correctAudio = 'audio/correct.mp3';
const notCorrectAudio = 'audio/error.mp3';

export const GameContainer: React.FC<Props> = ({ cardsArray, mode }) => {
  const dispatch = useDispatch();

  const isGameStarted = useSelector(
    (state: AppState) => state.game.isGameStarted,
  );
  const mistakes = useSelector((state: AppState) => state.game.mistakes);
  const [currentRandomCard, setCurrentRandomCard] = useState<ICard>({
    word: '',
    audioSrc: '',
    translation: '',
    image: '',
  });
  const [cards, setCards] = useState<ICard[]>(cardsArray);
  const [redirect, setRedirect] = useState(false);
  const [isGameOver, setGameOver] = useState(false);

  useEffect(() => {
    setCards(cardsArray);
    dispatch(resetGame());
  }, [mode, cardsArray]);

  useEffect(() => {
    if (mode && !isGameStarted) return;
    getRandomAudio(cards);
  }, [cards]);

  const getRandomAudio = (cards: ICard[]) => {
    const randomItem = cards[Math.floor(Math.random() * cards.length)];
    if (!randomItem) {
      gameOver();
      return;
    }

    setCurrentRandomCard(randomItem);
    setTimeout(() => playAudio(randomItem.audioSrc), 500);
  };

  const correctCard = (): boolean => {
    playAudio(correctAudio);
    setCards(cards.filter((item) => item !== currentRandomCard));
    dispatch(addStar({ isCorrect: true }));

    setPlayModeClick(currentRandomCard.word);

    return true;
  };

  const notCorrectCard = (): boolean => {
    playAudio(notCorrectAudio);

    dispatch(addStar({ isCorrect: false }));
    setFailItem(currentRandomCard.word);

    return false;
  };

  const findCard = (card: ICard): boolean => {
    let isCorrect = false;
    if (isGameStarted) {
      currentRandomCard === card
        ? (isCorrect = correctCard())
        : (isCorrect = notCorrectCard());
    }

    return isCorrect;
  };

  const gameOver = () => {
    dispatch(getMistakes());
    dispatch(clearStars());
    setGameOver(true);

    setTimeout(() => setRedirect(true), 2000);
  };

  const startGame = () => {
    dispatch(toggleGameStarted(true));
    getRandomAudio(cards);
  };

  const repeatAudio = () => {
    if (currentRandomCard) {
      playAudio(currentRandomCard.audioSrc);
    }
  };

  return (
    <>
      <div
        className={classNames('game__container', {
          'game-mode': mode === 'PLAY',
        })}
      >
        {cardsArray.map((card, index) => (
          <GameCard card={card} mode={mode} key={index} findCard={findCard} />
        ))}
      </div>
      {mode === 'PLAY' && (
        <GameButtons
          isGameStarted={isGameStarted}
          handlerRepeatAudio={repeatAudio}
          handlerStartGame={startGame}
        />
      )}
      {isGameOver && <GameEnd mistakes={mistakes} />}
      {redirect && <Redirect from="/cards" to="/categories" />}
    </>
  );
};
