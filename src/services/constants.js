export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_ANSWER_BEGIN = 'FETCH_ANSWER_BEGIN';
export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';
export const FETCH_ANSWER_FAILURE = 'FETCH_ANSWER_FAILURE';
export const CLEAR_ANSWER = 'CLEAR_ANSWER';
export const CHANGED_CONNECTION = 'CHANGED_CONNECTION';

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
      return rgb ? '(88,164,176)' : '#58A4B0';
      break;
    case 'Das':
      return rgb ? '(30,100,70)' : '#1E6446';
      break;

    case 'Die':
      return rgb ? '(172,123,132)' : '#AC7B84';
      break;
    default:
      console.log('wrong gender:' + gender);
      return;
  }
}
