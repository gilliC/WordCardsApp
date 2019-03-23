import styled from 'styled-components';
import React, {Component} from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

import {
  MainText,
  MainContainer,
  GenderButtonGroup,
  BackgroundStyleByGender,
} from '../../components/common_components';
import {secondaryColor} from '../../services/constants';

class ExerciseByGender extends Component {
  constructor(props) {
    super(props);
    const {germanWord, translation, gender} = this.props.word;
    this.state = {
      isMistake: false,
    };
    this.checkIfCorrect = this.checkIfCorrect.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
  }

  checkIfCorrect(answerIndex) {
    if (answerIndex === this.props.word.gender) {
      this.setState({isMistake: false});
      this.props.onCorrectAnswer();
    } else {
      this.setState({isMistake: true});
      return false;
    }
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        this.checkIfCorrect('Der');
        break;
      case SWIPE_LEFT:
        this.checkIfCorrect('Das');
        break;
      case SWIPE_RIGHT:
        this.checkIfCorrect('Die');
        break;
    }
  }

  render() {
    const {isMistake} = this.state;
    const {germanWord, translation} = this.props.word;
    return (
      <Container onSwipe={(direction, state) => this.onSwipe(direction, state)}>
        <MainContainer>
          <MainText>{germanWord}</MainText>
          <View>
            {isMistake && (
              <MainText fontSize={15}>Oops wrong answer, try again!</MainText>
            )}
          </View>
        </MainContainer>
      </Container>
    );
  }
}
export default ExerciseByGender;

export const Container = styled(GestureRecognizer)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;
