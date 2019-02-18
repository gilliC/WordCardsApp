import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

import {InputAddWord, ButtonAddWord} from './addWord_components';
import {
  Title,
  MainContainer,
  GenderButtonGroup,
  BackgroundStyleByGender,
} from '../Components/common_components';
import {secondaryColor} from '../services/constants';

class AddWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      germanWord: '',
      translation: '',
      selectedIndex: 0,
      buttons: ['Das', 'Die', 'Der'],
      germanWordErrorMsg: '',
      translationErrorMsg: '',
    };
    this.onSendingForm = this.onSendingForm.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.onChangeGermanWord = this.onChangeGermanWord.bind(this);
    this.onChangeTranslation = this.onChangeTranslation.bind(this);
  }
  onSendingForm() {
    console.log('press');
    /**
    const state = this.state;
    const {germanWord, englishTrans} = state;
    const gender = state.buttons[state.selectedIndex];
    //this.props.insertWord(germanWord, englishTrans, gender);
    //*/
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }
  validateInput(text) {
    if (text.length <= 1) return 'You must fill this field';
    return true;
  }
  onChangeGermanWord(text) {
    const answer = this.validateInput(text);
    if (answer !== true)
      this.setState({germanWordErrorMsg: answer, germanWord: text});
    else this.setState({germanWord: text});
  }
  onChangeTranslation(text) {
    const answer = this.validateInput(text);
    if (answer !== true)
      this.setState({translationErrorMsg: answer, translation: text});
    else this.setState({translation: text});
  }

  render() {
    const {
      selectedIndex,
      buttons,
      germanWordErrorMsg,
      translationErrorMsg,
    } = this.state;
    let btnSelectedStyle = BackgroundStyleByGender(buttons[selectedIndex]);
    return (
      <MainContainer>
        <Title>Add A Word</Title>
        <InputAddWord
          placeholder="German word"
          onChangeText={text => this.onChangeGermanWord(text)}
          errorMessage={germanWordErrorMsg}
          leftIcon={
            <Icon
              name="alpha-g-box"
              type="material-community"
              size={30}
              color={secondaryColor}
            />
          }
        />
        <InputAddWord
          placeholder=" Translation"
          errorMessage={translationErrorMsg}
          leftIcon={
            <Icon
              name="language"
              type="font-awesome"
              size={30}
              color={secondaryColor}
            />
          }
        />

        <View>
          <GenderButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={btnSelectedStyle}
          />
        </View>
        <ButtonAddWord onPress={this.onSendingForm} />
      </MainContainer>
    );
  }
}
export default AddWord;
