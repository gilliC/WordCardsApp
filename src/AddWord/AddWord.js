import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity} from 'react-native';

class AddWord extends Component {
  static navigationOptions = {
    title: 'Add A Word     ',
  };
  constructor(props) {
    super(props);
    this.state = {
      germanWord: '',
      englishTrans: '',
      selectedIndex: 0,
      buttons: ['Das', 'Die', 'Der'],
      vocabularyCount: this.props.items.length,
    };
    this.onSendingForm = this.onSendingForm.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }
  onSendingForm() {
    const state = this.state;
    const {germanWord, englishTrans} = state;
    const gender = state.buttons[state.selectedIndex];
    //this.props.insertWord(germanWord, englishTrans, gender);
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }

  render() {
    const {selectedIndex, buttons} = this.state;
    let btnColor = designByGender(buttons[selectedIndex]);
    let btnSelectedStyle = {borderColor: btnColor};
    let btnSelectedTxt = {
      color: btnColor,
      fontSize: 20,
    };
    return (
      <View>
        <Text style={[style.h1, Styles.centerTxt]}>Add A Word</Text>
        <View style={Styles.vocabularyContainer}>
          <FormLabel>German Word</FormLabel>
          <FormInput onChangeText={text => this.setState({germanWord: text})} />

          <FormLabel>English Translation</FormLabel>
          <FormInput
            onChangeText={text => this.setState({englishTrans: text})}
          />

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={style.btnStyle}
            selectedButtonStyle={[style.btnSelectedStyle, btnSelectedStyle]}
            selectedTextStyle={btnSelectedTxt}
          />
        </View>
        <Button
          raised
          icon={{name: 'add'}}
          backgroundColor="#1D3767"
          title="Add"
          onPress={this.onSendingForm}
          buttonStyle={style.btnStyle}
        />
        <FormValidationMessage>{this.props.errorAnswer}</FormValidationMessage>
        <Text style={Styles.centerTxt}>{this.props.answer}</Text>
      </View>
    );
  }
}
export default AddWord;
