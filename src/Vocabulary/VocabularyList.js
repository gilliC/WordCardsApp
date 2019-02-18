import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';

import {fetchData} from '../services/actions/vocabulary_actions';
import {Title} from '../Components/common_components';
import {ListContainer} from './vocabulary_components';

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
        <ListContainer>
          <Swiper showsPagination={false} showsButtons={true}>
            {vocabulary.map(word => {
              return <WordItem word={word} key={word.id} />;
            })}
          </Swiper>
        </ListContainer>
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
