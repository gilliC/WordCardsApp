import React, {Component} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

import {
  MainText,
  MainContainer,
  GenderButtonGroup,
  BackgroundStyleByGender,
} from '../components/common_components';
import {secondaryColor, byGender} from '../services/constants';

export default props => {
  const {germanWord, translation, gender, type} = props.word;

  return (
    <View>
      <MainText fontSize={25}>Correct!</MainText>
      <MainText fontSize={55}>
        {gender} {germanWord}
      </MainText>
      <MainText>{translation}</MainText>
    </View>
  );
};
