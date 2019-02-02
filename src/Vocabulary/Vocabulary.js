import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import VocabularyList from './VocabularyList';
import {MainButton} from '../Components/common_components';
import {VocabularyContainer, VocabularyBottom} from './vocabulary_components';
class Vocabulary extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.onSwipeUp = this.onSwipeUp.bind(this);
  }
  onPress() {
    this.props.navigation.navigate('AddWord');
  }
  onSwipeUp() {
    this.props.navigation.navigate('AddWord');
  }
  render() {
    return (
      <VocabularyContainer onSwipeUp={this.onSwipeUp}>
        <VocabularyList />
        <VocabularyBottom>
          <MainButton text="Add a word" onPress={this.onPress} />
        </VocabularyBottom>
      </VocabularyContainer>
    );
  }
}
export default Vocabulary;
