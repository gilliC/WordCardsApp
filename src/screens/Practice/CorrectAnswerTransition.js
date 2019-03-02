import React, {Component} from 'react';
import {MainText, MainContainer} from '../../components/common_components';

export default props => {
  const {germanWord, translation, gender, type} = props.word;

  return (
    <MainContainer>
      <MainText fontSize={25}>Correct!</MainText>
      <MainText fontSize={55}>
        {gender} {germanWord}
      </MainText>
      <MainText>{translation}</MainText>
    </MainContainer>
  );
};
