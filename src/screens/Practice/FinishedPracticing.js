import React, {Component} from 'react';
import {
  MainButton,
  MainText,
  MainContainer,
} from '../../components/common_components';

export default props => {
  return (
    <MainContainer>
      <MainText>Great job!</MainText>
      <MainText fontSize={20}>
        You have finished practicing the whole vocabulary
      </MainText>
      <MainButton
        text="Home"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
    </MainContainer>
  );
};
