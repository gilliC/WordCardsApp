import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {capitalizeFirstLetter, designByGender} from '../services/constants';
import {WordContainer, WordText} from './vocabulary_components';

export default ({word}) => {
  let gender = word.gender;
  gender = capitalizeFirstLetter(gender);
  const {germanWord, englishTranslation} = word;
  let genderColor = designByGender(gender);
  let genderStyle = {borderColor: genderColor};

  return (
    <WordContainer genderColor={genderColor}>
      <WordText color={genderColor}>
        {gender} {germanWord}
      </WordText>
      <WordText fontSize={20} color={genderColor}>
        {englishTranslation}
      </WordText>
    </WordContainer>
  );
};
