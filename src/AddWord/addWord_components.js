import styled from 'styled-components';
import React from 'react';

import {designByGender, getWithOpacity} from '../services/functionsUtilities';
import {primaryColor, secondaryColor} from '../services/constants';
import {Button, Input, Icon} from 'react-native-elements';
import {errorStyle, inputStyle} from '../Components/common_components';

const addButtonStyle = () => {
  const color = getWithOpacity('secondaryColor', 0.2);
  return {
    backgroundColor: color,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '100%',
    height: '100%',
  };
};

const addButtonContainerStyle = {
  width: '90%',
  height: 50,
  alignSelf: 'center',
  marginTop: 20,
  backgroundColor: 'transparent',
};

export const InputAddWord = props => {
  return (
    <Input
      {...props}
      containerStyle={inputStyle}
      errorStyle={errorStyle}
      placeholderTextColor={secondaryColor}
    />
  );
};

export const ButtonAddWord = props => {
  return (
    <Button
      {...props}
      buttonStyle={addButtonStyle()}
      containerStyle={addButtonContainerStyle}
      icon={
        <Icon
          name="plus"
          type="font-awesome"
          size={25}
          color={secondaryColor}
        />
      }
    />
  );
};
