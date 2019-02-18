import React from 'react';
import {
  MainButton,
  Title,
  MainContainer,
} from '../Components/common_components';

export default props => {
  return (
    <MainContainer>
      <MainButton
        text="Vocabulary"
        onPress={() => {
          props.navigation.navigate('Vocabulary');
        }}
      />
      <Title>Hello User!</Title>
      <MainButton
        text="Practice"
        onPress={() => {
          props.navigation.navigate('Practice');
        }}
      />
    </MainContainer>
  );
};
