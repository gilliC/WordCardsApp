import React from 'react';
import styled from 'styled-components';
import GestureRecognizer from 'react-native-swipe-gestures';

import {Text, View, TouchableOpacity} from 'react-native';
import {primaryColor, getWithOpacity} from '../app_components';

export const VocabularyContainer = styled(GestureRecognizer)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;
export const VocabularyBottom = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const WordContainer = styled.View`
  justify-content: center;
  height: 90%;
  width: 80%;
  align-self: center;
  border-radius: 10;
  border-width: 6;
  margin-top: 10px;
  border-color: ${props => props.genderColor || primaryColor};
  background-color: ${props =>
    getWithOpacity(props.genderColor || 'primaryColor', 0.1)};
`;

export const WordText = styled.Text`
  font-size: ${props => props.fontSize || '45'};
  color: ${props => props.color || primaryColor};
  text-align: center;
`;
