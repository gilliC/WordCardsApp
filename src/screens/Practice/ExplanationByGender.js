import React, {Component} from 'react';
import {
  MainText,
  MainContainer,
  MainButton,
} from '../../components/common_components';

export default props => {
  return (
    <MainContainer>
      <MainText fontSize={25}>Swipe LEFT for DAS</MainText>
      <MainText fontSize={25}>Swipe UP for DER</MainText>
      <MainText fontSize={25}>Swipe right for DIE</MainText>
      <MainButton text="Got it" onPress={props.onFinishExplnation} />
    </MainContainer>
  );
};
