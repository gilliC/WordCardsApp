import React, {Component} from 'react';

import {
  capitalizeFirstLetter,
  designByGender,
} from '../../services/functionsUtilities';
import {WordContainer, WordText} from './vocabulary_components';

export default ({word}) => {
  let gender = word.gender;
  gender = capitalizeFirstLetter(gender);
  const {germanWord, translation} = word;
  let genderColor = designByGender(gender);
  let genderStyle = {borderColor: genderColor};

  return (
    <WordContainer genderColor={genderColor}>
      <WordText color={genderColor}>
        {gender} {germanWord}
      </WordText>
      <WordText
        fontSize={40}
        fontFamily={'BreeSerif-Regular'}
        color={genderColor}>
        {translation}
      </WordText>
    </WordContainer>
  );
};
