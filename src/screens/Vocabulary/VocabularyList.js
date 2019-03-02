import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';

import {fetchData} from '../services/actions/vocabulary_actions';
import {MainText} from '../components/common_components';
import ErrorComponent from '../Components/Error';
import {ListContainer} from './vocabulary_components';

import WordItem from './WordItem';

class VocabularyList extends Component {
  componentDidMount() {
    if (!this.props.vocabularyCount) {
      this.props.fetchData();
    }
  }
  render() {
    let component = <MainText>Wait ..</MainText>;
    const {error, loading, vocabulary} = this.props;

    if (error) return <ErrorComponent error={error} />;
    if (loading) {
      console.log('loading...');
      return <MainText>Loading ..</MainText>;
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
