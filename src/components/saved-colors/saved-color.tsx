import React, { MouseEventHandler } from 'react';
import Button from '../shared/button';
import ColorChangeSwatch from '../shared/color-change-swatch';
import { ColorsActions } from '../../color-reducer';

type SavedColorProps = {
  name: string;
  hexColor: string;
  dispatch: React.Dispatch<ColorsActions>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onRemove?: () => void;
};

const SavedColor = ({ name, hexColor, onClick, onRemove, dispatch }: SavedColorProps) => {
  return (
    <article className="flex items-center gap-2 place-content-between">
      <ColorChangeSwatch hexColor={hexColor} onClick={onClick} dispatch={dispatch} />
      <h3 className="text-sm whitespace-nowrap">{name}</h3>
      <Button variant="destructive" size="small" onClick={onRemove}>
        Remove
      </Button>
    </article>
  );
};

export default SavedColor;
