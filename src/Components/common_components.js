import React from 'react';
import styled from 'styled-components';
import {Text, View, TouchableOpacity} from 'react-native';
import {ButtonGroup, Button, Input, Icon} from 'react-native-elements';

import {designByGender, getWithOpacity} from '../services/functionsUtilities';
import {primaryColor, secondaryColor} from '../services/constants';

const MainButtonContainer = styled.TouchableOpacity`
  background-color: ${getWithOpacity('secondaryColor', 0.4)};
  border-radius: 20;
  border: 2px solid ${secondaryColor};
  justify-content: center;
  width: 300;
  height: 60;
  margin-top: 10;
  elevation: 10;
`;
const MainButtonText = styled.Text`
  color: ${secondaryColor};
  font-family: AlfaSlabOne-Regular;
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
export const MainContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  opacity: 1 !important;
`;
export const MainInput = props => {
  return (
    <Input
      {...props}
      containerStyle={inputStyle}
      errorStyle={errorStyle}
      placeholderTextColor={secondaryColor}
    />
  );
};
export const Title = styled.Text`
  color: ${secondaryColor};
  font-size: ${props => props.fontSize || '40'};
  font-family: AlfaSlabOne-Regular;
  text-align: center;
`;

export const Container = styled.View`
  align-items: ${props => props.alignItems || 'center'};
`;

export const GenderButtonGroup = props => {
  return (
    <ButtonGroup
      {...props}
      containerStyle={inputStyle}
      textStyle={buttonGroupTextStyle}
    />
  );
};
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

/////////////// General Styles //////////////

export const errorStyle = {
  color: 'red',
  textAlign: 'center',
};

export const inputStyle = {
  width: '90%',
  height: 50,
  alignSelf: 'center',
  marginTop: 20,
  backgroundColor: 'transparent',
};
const buttonGroupTextStyle = {
  fontSize: 25,
};
export const BackgroundStyleByGender = gender => {
  let color = designByGender(gender) || primaryColor;
  return {
    backgroundColor: color,
  };
};
