import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';

import {fetchData} from '../services/actions/vocabulary_actions';
import {Title} from '../Components/common_components';
import WordItem from './WordItem';

class VocabularyList extends Component {
  componentDidMount() {
    if (this.props.vocabularyCount === 0) {
      this.props.fetchData();
    }
  }
  render() {
    let component = <Title>Wait ..</Title>;
    const {error, loading, vocabulary} = this.props;

    if (error) {
      component = <Title>Error! {error.message}</Title>;
    }
    if (loading) {
      console.log('loading...');
      component = <Title>Loading ..</Title>;
    }
    if (vocabulary.length > 0) {
      component = (
        <Swiper showsPagination={false}>
          {vocabulary.map(word => {
            return <WordItem word={word} key={word.id} />;
          })}
        </Swiper>
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
)(VocabularyList);
