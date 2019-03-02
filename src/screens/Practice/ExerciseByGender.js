import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

import {
  MainText,
  MainContainer,
  GenderButtonGroup,
  BackgroundStyleByGender,
} from '../components/common_components';
import {secondaryColor} from '../services/constants';

class ExerciseByGender extends Component {
  constructor(props) {
    super(props);
    const {germanWord, translation, gender} = this.props.word;
    this.state = {
      buttons: ['Das', 'Die', 'Der'],
      selectedIndex: 0,
      isMistake: false,
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.checkIfCorrect = this.checkIfCorrect.bind(this);
  }

  checkIfCorrect(answerIndex) {
    if (this.state.buttons[answerIndex] === this.props.word.gender) {
      this.setState({isMistake: false});
      this.props.onCorrectAnswer();
    } else {
      this.setState({isMistake: true});
      return false;
    }
  }
  updateIndex(selectedIndex) {
    if (!this.state.isCorrect) {
      this.setState({selectedIndex});
      this.checkIfCorrect(selectedIndex);
    }
  }

  render() {
    const {selectedIndex, buttons, isMistake} = this.state;
    const {germanWord, translation} = this.props.word;
    let btnSelectedStyle = BackgroundStyleByGender(buttons[selectedIndex]);
    return (
      <MainContainer>
        <MainText>{germanWord}</MainText>
        <View>
          <GenderButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={btnSelectedStyle}
          />
          {isMistake && (
            <MainText fontSize={15}>Oops wrong answer, try again!</MainText>
          )}
        </View>
      </MainContainer>
    );
  }
}
export default ExerciseByGender;
