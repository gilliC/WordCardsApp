import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {Icon} from 'react-native-elements';

import {insertWord} from '../services/actions/single_word_actions';
import {fetchData} from '../services/actions/vocabulary_actions';
import {ButtonAddWord} from './addWord_components';
import {
  MainText,
  MainInput,
  GenderButtonGroup,
  BackgroundStyleByGender,
} from '../components/common_components';
import {secondaryColor} from '../services/constants';
import {isStringAWord} from '../services/functionsUtilities';

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
      formErrorMsg: '',
    };

    this.onSendingForm = this.onSendingForm.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.onChangeGermanWord = this.onChangeGermanWord.bind(this);
    this.onChangeTranslation = this.onChangeTranslation.bind(this);
    this.validateAllFields = this.validateAllFields.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.connectAnswer === 'Succeed') this.props.fetchData();
  }
  onSendingForm() {
    const {germanWord, translation, buttons, selectedIndex} = this.state;
    if (this.validateAllFields()) {
      this.setState({formErrorMsg: ''});
      const gender = buttons[selectedIndex];
      this.props.insertWord(germanWord, translation, gender);
    } else {
      this.setState({formErrorMsg: 'Not all fileds have been filled'});
    }
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }
  validateAllFields() {
    const {germanWord, translation} = this.state;
    if (isStringAWord(germanWord) && isStringAWord(translation)) return true;
    return false;
  }
  onChangeGermanWord(text) {
    const answer = isStringAWord(text) ? true : 'You must fill this field';
    if (answer !== true)
      this.setState({germanWordErrorMsg: answer, germanWord: text});
    else this.setState({germanWordErrorMsg: '', germanWord: text});
  }
  onChangeTranslation(text) {
    const answer = isStringAWord(text) ? true : 'You must fill this field';
    if (answer !== true)
      this.setState({translationErrorMsg: answer, translation: text});
    else this.setState({translationErrorMsg: '', translation: text});
  }

  render() {
    const {
      selectedIndex,
      buttons,
      germanWordErrorMsg,
      translationErrorMsg,
      formErrorMsg,
    } = this.state;
    let btnSelectedStyle = BackgroundStyleByGender(buttons[selectedIndex]);
    return (
      <KeyboardAvoidingView>
        <MainText>Add A Word</MainText>
        <MainInput
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
        <MainInput
          placeholder=" Translation"
          onChangeText={text => this.onChangeTranslation(text)}
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
        <MainText fontSize={20} color="red" fontFamily="Oswald_Regular">
          {formErrorMsg}
        </MainText>
        <MainText fontSize={20}>
          {this.props.connectLoading}
          {this.props.connectAnswer}
        </MainText>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = state => {
  return {
    connectAnswer: state.singleWordAnswer.answer,
    connectLoading: state.singleWordAnswer.loading,
    connectError: state.singleWordAnswer.error,
  };
};

export default connect(
  mapStateToProps,
  {insertWord, fetchData},
)(AddWord);
