import styled from 'styled-components';
import {View, TouchableOpacity} from 'react-native';

import {designByGender} from '../services/constants';
import {primaryColor} from '../app_components';

export const addButtonStyle = {
  backgroundColor: primaryColor,
  width: '100%',
  alignSelf: 'center',
  height: 50,
};

export const addButtonContainerStyle = {
  backgroundColor: primaryColor,
  width: '90%',
  alignSelf: 'center',
  height: 50,
  marginTop: 20,
};
export const getSelectedButtonStyle = gender => {
  let color = designByGender(gender) || primaryColor;
  return {
    backgroundColor: color,
  };
};

export const buttonGroupContainerStyle = {
  width: '90%',
  margin: 0,
  height: 50,
  alignSelf: 'center',
  marginTop: 20,
};

export const buttonGroupTextStyle = {
  fontSize: 25,
};

export const errorStyle = {
  color: 'red',
  textAlign: 'center',
};
