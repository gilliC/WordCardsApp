import styled from 'styled-components';
import {View} from 'react-native';
import {hexToRGB, isHex} from './services/constants';

const appColors = {
  primaryColor: '#1D3767',
  secondaryColor: '#f2f4f3',
};
export function getWithOpacity(color, opacity) {
  if (typeof opacity !== 'number') return null;
  if (isHex(color)) color = hexToRGB(color);
  if (opacity > 1) return null;

  switch (color) {
    case 'primaryColor':
      return 'rgba(29,55,103,' + opacity + ')';

    case 'secondaryColor':
      return 'rgba(255,255,255,' + opacity + ')';

    default:
      color = formatColorToGetWithOpacity(color);
      return 'rgba(' + color + ',' + opacity + ')';
  }
}
function formatColorToGetWithOpacity(color) {
  color = color.split('rgb(');
  color = color[1].split(')');
  return color[0];
}
export const {primaryColor, secondaryColor} = appColors;

const Body = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: ${secondaryColor};
`;
