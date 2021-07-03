import React from 'react';
import { IconBase } from '@components/icon-base/icon-base';

import './footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__github">
          <h4 className="text-md">Azizbek Savkimov</h4>
          <a
            className="footer__github-link"
            href="https://github.com/AzizbekSavkimov"
          >
            <IconBase name="icon-github" />
          </a>
        </div>
        <div className="footer__rsschool">
          <a href="https://rs.school" className="footer__link">
            <IconBase name="icon-rsschool" />
          </a>
        </div>
      </div>
    </footer>
  );
};
