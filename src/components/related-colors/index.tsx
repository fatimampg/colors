import { useContext } from 'react';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';
import { ColorContext } from '../../context';

const RelatedColors = () => {
  const { hexColor } = useContext(ColorContext);
  const triadColors = getTriadColors(hexColor);
  const complementColors = getComplementColors(hexColor);

  return (
    <>
      <RelatedColorPalette title="Triad Colors" hexColors={triadColors} />
      <RelatedColorPalette title="Complimentary Colors" hexColors={complementColors} />
    </>
  );
};

export default RelatedColors;
