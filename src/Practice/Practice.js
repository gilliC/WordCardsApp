import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchData} from '../services/actions/vocabulary_actions';
import {
  MainButton,
  Title,
  MainContainer,
} from '../Components/common_components';
import ExerciseByGender from './ExerciseByGender';

class Practice extends Component {
  componentDidMount() {
    if (this.props.vocabularyCount === 0) {
      this.props.fetchData();
    }
  }
  render() {
    let component = <Title>Wait ..</Title>;
    const {error, loading, vocabulary} = this.props;
    if (error) {
      if (error.message === 'Network request failed') {
        console.log(error.message);
        return (
          <Title>
            It seems like there is an issue with the network connection
          </Title>
        );
      } else {
        return <Title>Error! {error.message}</Title>;
      }
    }
    if (loading) {
      console.log('loading...');
      return <Title>Loading ..</Title>;
    }
    if (vocabulary.length > 0) {
      return (
        <MainContainer>
          <ExerciseByGender word={vocabulary[0]} />
        </MainContainer>
      );
    }
    return component;
  }
}
const mapStateToProps = state => {
  return {
    vocabulary: state.vocabulary.vocabulary,
    vocabularyCount: state.vocabulary.vocabularyCount,
    loading: state.vocabulary.loading,
    error: state.vocabulary.error,
  };
};

export default connect(
  mapStateToProps,
  {fetchData},
)(Practice);
