import React from 'react';
import styled from 'styled-components';
import GestureRecognizer from 'react-native-swipe-gestures';
import {Text, View} from 'react-native';

import {primaryColor} from '../../services/constants';
import {getWithOpacity} from '../../services/functionsUtilities';

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
  height: 300;
  width: 80%;
  align-self: center;
  border-radius: 10;
  border-width: 2;
  margin-top: 10px;
  border-color: white;
  background-color: ${props =>
    getWithOpacity(props.genderColor || 'primaryColor', 0.9)};
`;

export const WordText = styled.Text`
  font-size: ${props => props.fontSize || '55'};
  font-family: ${props => props.fontFamily || 'AbrilFatface-Regular'};
  text-align: center;
  color: white;
`;

export const ListContainer = styled.View`
  height: 80%;
  width: 100%;
  justify-content: center;
`;
