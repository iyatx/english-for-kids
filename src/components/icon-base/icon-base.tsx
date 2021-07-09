import React from 'react';
import { IconRepeat } from './icon-repeat';
import { IconStar } from './icon-star';
import { IconVolume } from './icon-volume';
import { IconRSSchool } from './icon-rsshool/index';
import { IconGithub } from './icon-github/index';
import { IconSadFace } from './icon-sad-face';
import { IconFunFace } from './icon-fun-face';
import { IconArrowSort } from './icon-arrow-sort';

interface Props {
  name: string;
  backgroundColor?: string;
}

export const IconBase: React.FC<Props> = ({ name, backgroundColor = '' }) => {
  switch (name) {
    case 'icon-repeat':
      return <IconRepeat />;
    case 'icon-volume':
      return <IconVolume />;
    case 'icon-star':
      return <IconStar backgroundColor={backgroundColor} />;
    case 'icon-rsschool':
      return <IconRSSchool />;
    case 'icon-github':
      return <IconGithub />;
    case 'icon-sad-face':
      return <IconSadFace />;
    case 'icon-fun-face':
      return <IconFunFace />;
    case 'icon-arrow-sort':
      return <IconArrowSort />;
    default:
      return <></>;
  }
};
