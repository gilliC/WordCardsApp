import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity} from 'react-native';
import {ButtonGroup, Button, Input, Icon} from 'react-native-elements';

import {
  addButtonStyle,
  addButtonContainerStyle,
  getSelectedButtonStyle,
  buttonGroupContainerStyle,
  buttonGroupTextStyle,
  errorStyle,
} from './addWord_components';
import {Title} from '../Components/common_components';
import {primaryColor} from '../app_components';

class AddWord extends Component {
  static navigationOptions = {
    title: 'Add A Word     ',
  };
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
    let btnSelectedStyle = getSelectedButtonStyle(buttons[selectedIndex]);
    return (
      <View>
        <Title>Add A Word</Title>
        <Input
          placeholder="German word"
          containerStyle={buttonGroupContainerStyle}
          onChangeText={text => this.onChangeGermanWord(text)}
          errorStyle={errorStyle}
          errorMessage={germanWordErrorMsg}
          leftIcon={
            <Icon
              name="alpha-g-box"
              type="material-community"
              size={30}
              color={primaryColor}
            />
          }
        />
        <Input
          placeholder=" Translation"
          containerStyle={buttonGroupContainerStyle}
          errorStyle={errorStyle}
          errorMessage={translationErrorMsg}
          leftIcon={
            <Icon
              name="language"
              type="font-awesome"
              size={30}
              color={primaryColor}
            />
          }
        />

        <View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={btnSelectedStyle}
            containerStyle={buttonGroupContainerStyle}
            textStyle={buttonGroupTextStyle}
          />
        </View>
        <Button
          raised
          onPress={this.onSendingForm}
          buttonStyle={addButtonStyle}
          containerStyle={addButtonContainerStyle}
          icon={
            <Icon name="plus" type="font-awesome" size={25} color="white" />
          }
        />
      </View>
    );
  }
}
export default AddWord;
