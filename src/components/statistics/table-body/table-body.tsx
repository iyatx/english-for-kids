import React from 'react';
import { ICardStatistics } from '@interfaces/index';

interface Props {
  items: ICardStatistics[];
}

export const TableBody: React.FC<Props> = ({ items }) => {
  return (
    <tbody>
      {items.map(
        (
          {
            category,
            word,
            translation,
            playClick,
            trainClick,
            fails,
            percent,
          },
          index,
        ) => {
          return (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td>{category}</td>
              <td className="text-center">{word}</td>
              <td className="text-center">{translation}</td>
              <td className="text-center">{trainClick}</td>
              <td className="text-center">{playClick}</td>
              <td className="text-center">{fails}</td>
              <td className="text-center">{percent}</td>
            </tr>
          );
        },
      )}
    </tbody>
  );
};
