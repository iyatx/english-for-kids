import React from 'react';
import { IconBase } from '@components/icon-base/icon-base';

interface Props {
  isGameStarted: boolean;
  handlerRepeatAudio: () => void;
  handlerStartGame: () => void;
}

export const GameButtons: React.FC<Props> = ({
  isGameStarted,
  handlerRepeatAudio,
  handlerStartGame,
}) => {
  return (
    <>
      {isGameStarted ? (
        <button className="btn game__repeat-btn" onClick={handlerRepeatAudio}>
          <IconBase name="icon-repeat" />
        </button>
      ) : (
        <button
          className="btn game__start-btn text-sm"
          onClick={handlerStartGame}
        >
          Start Game
        </button>
      )}
    </>
  );
};
