import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

import {
  Title,
  MainContainer,
  GenderButtonGroup,
  BackgroundStyleByGender,
} from '../Components/common_components';
import {secondaryColor} from '../services/constants';

class ExerciseByGender extends Component {
  constructor(props) {
    super(props);
    const {germanWord, translation, gender} = this.props.word;
    this.state = {
      germanWord: germanWord,
      translation: translation,
      gender: gender,
      selectedIndex: 0,
      buttons: ['Das', 'Die', 'Der'],
    };
    this.onSendingForm = this.onSendingForm.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }
  onSendingForm() {
    console.log('press');
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }
  validateInput(text) {
    if (text.length <= 1) return 'You must fill this field';
    return true;
  }

  render() {
    const {germanWord, translation, selectedIndex, buttons} = this.state;
    let btnSelectedStyle = BackgroundStyleByGender(buttons[selectedIndex]);
    return (
      <MainContainer>
        <Title>{germanWord}</Title>
        <View>
          <GenderButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={btnSelectedStyle}
          />
        </View>
      </MainContainer>
    );
  }
}
export default ExerciseByGender;
