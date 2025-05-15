import clsx from 'clsx';
import React, { MouseEventHandler } from 'react';
import Button from './button';
import { ColorsActions } from '../../color-reducer';

type ColorChangeSwatchProps = {
  hexColor: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  dispatch: React.Dispatch<ColorsActions>;
};

const ColorChangeSwatch = ({
  hexColor,
  className,
  onClick,
  dispatch
}: ColorChangeSwatchProps) => {
  return (
    <Button
      className={clsx(
        'border-2 border-slate-900 transition-shadow duration-200 ease-in hover:shadow-xl',
        className,
      )}
      style={{ backgroundColor: hexColor }}
      onClick={() => dispatch({ type: 'update-hex-color', payload: { hexColor } })} 
    >
      {hexColor}
    </Button>
  );
};

export default ColorChangeSwatch;
