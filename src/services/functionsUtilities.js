import {primaryColor, secondaryColor} from './constants';

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function handleErrors(response) {
  if (!response.ok) {
    console.log('Error ' + response.statusText);
    throw Error(response.statusText);
  }
  return response;
}

export function getRandom(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
}

export function isStringAWord(string) {
  if (typeof string !== 'string') return false;
  if (/\d/.test(string)) return false;
  if (string.length <= 1) return false;
  return true;
}
///////////// COLORS /////////////
export function isHex(hex) {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) return true;
  return false;
}
export function hexToRGB(hex) {
  var c;
  if (isHex(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgb(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ')';
  }
  throw new Error('Bad Hex:' + hex);
}

export function designByGender(gender, rgb = false) {
  switch (gender) {
    case 'Der':
      return rgb ? '(88,164,176)' : '#1D70A2';
      break;
    case 'Das':
      return rgb ? '(30,100,70)' : '#1E6446';
      break;

    case 'Die':
      return rgb ? '(172,123,132)' : '#C33C54';
      break;
    default:
      throw 'Wrong gender' + gender;
      return;
  }
}
export function getWithOpacity(color, opacity = 0.5) {
  if (typeof opacity !== 'number') opacity = 0.5;
  if (isHex(color)) color = hexToRGB(color);
  if (opacity > 1) return null;

  switch (color) {
    case 'primaryColor':
      color = formatColorToGetWithOpacity(hexToRGB(primaryColor));
      break;
    case 'secondaryColor':
      color = formatColorToGetWithOpacity(hexToRGB(secondaryColor));
      break;

    default:
      color = formatColorToGetWithOpacity(color);
      break;
  }
  return 'rgba(' + color + ',' + opacity + ')';
}
function formatColorToGetWithOpacity(color) {
  color = color.split('rgb(');
  color = color[1].split(')');
  return color[0];
}
