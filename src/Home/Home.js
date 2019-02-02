import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {MainContainer} from './home_components';
import {MainButton, Title} from '../Components/common_components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onPressVocabulary = this.onPressVocabulary.bind(this);
  }
  onPressVocabulary() {
    this.props.navigation.navigate('Vocabulary');
  }
  render() {
    return (
      <MainContainer>
        <MainButton text="Vocabulary" onPress={this.onPressVocabulary} />
        <Title>Hello User!</Title>
        <MainButton text="Practice" />
      </MainContainer>
    );
  }
}

export default Home;
