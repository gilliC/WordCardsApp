import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';

import {connectServer} from '../services/actions/connect_actions';

import {
  MainButton,
  MainText,
  MainContainer,
} from '../components/common_components';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.connect) {
      this.props.connectServer();
    }
  }
  render() {
    return (
      <MainContainer>
        <MainButton
          text="Vocabulary"
          onPress={() => {
            this.props.navigation.navigate('Vocabulary');
          }}
        />
        <MainText>Hello User!</MainText>
        <MainButton
          text="Practice"
          onPress={() => {
            this.props.navigation.navigate('Practice');
          }}
        />
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    connect: state.connect.isConnect,
    connectionError: state.connect.error,
  };
};

export default connect(
  mapStateToProps,
  {connectServer},
)(Home);
