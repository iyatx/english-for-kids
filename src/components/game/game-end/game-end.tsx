import React, { useState } from 'react';
import { useEffect } from 'react';
import { playAudio } from '@components/shared/play-audio';

import './game-end.scss';
import { IconBase } from './../../icon-base/icon-base';

interface Props {
  mistakes: number;
}

const successAudioSrc = 'audio/success.mp3';
const failureAudioSrc = 'audio/failure.mp3';

export const GameEnd: React.FC<Props> = ({ mistakes }) => {
  const [isWinner, setWinner] = useState(false);

  useEffect(() => {
    if (mistakes === 0) {
      setWinner(true);
      playAudio(successAudioSrc);
    } else {
      setWinner(false);
      playAudio(failureAudioSrc);
    }
  }, []);

  return (
    <div className="game-end">
      <div className="game-end__container">
        <div className="text-lg">
          {isWinner ? 'You are winner!!!' : `${mistakes} mistekes`}
        </div>
        <div className="game-end__icon">
          {isWinner ? (
            <IconBase name="icon-fun-face" />
          ) : (
            <IconBase name="icon-sad-face" />
          )}
        </div>
      </div>
    </div>
  );
};
