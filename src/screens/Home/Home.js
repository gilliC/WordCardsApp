import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';

import {connectServer} from '../../services/actions/connect_actions';

import {
  MainButton,
  MainText,
  MainContainer,
} from '../../components/common_components';
import Error from '../../components/Error';
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
    const {connect, connectError, connectLoading} = this.props;
    if (connect) {
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

    if (connectError) return <Error error={connectError} />;
    if (connectLoading) {
      return (
        <MainContainer>
          <MainText>Loading...</MainText>
        </MainContainer>
      );
    }
    return (
      <MainContainer>
        <MainText>Wait...</MainText>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    connect: state.connect.isConnect,
    connectError: state.connect.error,
    connectLoading: state.connect.loading,
  };
};

export default connect(
  mapStateToProps,
  {connectServer},
)(Home);
