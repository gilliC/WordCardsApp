import React from 'react';
import styled from 'styled-components';

import {Text, View, TouchableOpacity, NetInfo} from 'react-native';
import {primaryColor} from '../app_components';
const MainButtonContainer = styled.TouchableOpacity`
  background-color: ${primaryColor};
  border-radius: 30;
  border-style: solid;
  justify-content: center;
  width: 300;
  height: 60;
  margin-top: 10;
`;
const MainButtonText = styled.Text`
  color: white;
  font-size: 20;
  text-align: center;
`;
export const MainButton = props => {
  const {text} = props;
  if (typeof text !== 'string') {
    throw 'Text must be a string';
  }
  return (
    <MainButtonContainer {...props}>
      <MainButtonText>{text}</MainButtonText>
    </MainButtonContainer>
  );
};

export const Title = styled.Text`
  color: ${primaryColor};
  font-size: 40;
  text-align: center;
`;

export const Container = styled.View`
  align-items: ${props => props.alignItems || 'center'};
`;

////////////// CAROUSLE /////////////

export const ComponentItem = ({component}) => {
  return <View>{component}</View>;
};
export const CarouselRow = styled.View`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-wrap: wrap;
  :not([class]) {
    width: 100%;
  }
  & > [class*='col-'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
export const ColInRow = styled.TouchableOpacity`
  width: ${props => (props.size ? (100 / 12) * props.size + '%' : '100%')};
  display: flex;
`;
export const Arrow = () => {};
