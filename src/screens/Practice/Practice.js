import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchData} from '../services/actions/vocabulary_actions';
import {
  MainButton,
  MainText,
  MainContainer,
} from '../components/common_components';
import {getRandom} from '../services/functionsUtilities';

import ExerciseByGender from './ExerciseByGender';
import CorrectAnswerTransition from './CorrectAnswerTransition';
import ErrorComponent from '../components/Error';

class Practice extends Component {
  constructor(props) {
    super(props);
    let questionIndex = props.vocabularyCount
      ? getRandom(props.vocabularyCount)
      : -1;
    this.state = {
      questionIndex: questionIndex,
      isCorrect: false,
    };
    this.onCorrectAnswer = this.onCorrectAnswer.bind(this);
    this.setNewQuestion = this.setNewQuestion.bind(this);
    this.onFinishTransition = this.onFinishTransition.bind(this);
  }
  componentDidMount() {
    if (!this.props.vocabularyCount) {
      this.props.fetchData();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.questionIndex === -1 && nextProps.vocabularyCount) {
      this.setNewQuestion(nextProps.vocabularyCount, this.state.questionIndex);
    }
  }
  onCorrectAnswer() {
    this.setState({isCorrect: true});
    setTimeout(this.onFinishTransition, 1000);
  }
  onFinishTransition() {
    this.setNewQuestion(this.props.vocabularyCount, this.state.questionIndex);
  }
  setNewQuestion(max, lastIndex) {
    let newIndex = lastIndex;
    while (newIndex === lastIndex) newIndex = getRandom(max);
    this.setState({questionIndex: newIndex, isCorrect: false});
  }
  render() {
    let component = <MainText>Wait ..</MainText>;
    const {error, loading, vocabulary} = this.props;
    const {questionIndex, isCorrect} = this.state;

    if (error) return <ErrorComponent error={error} />;
    if (loading || questionIndex === -1) {
      return <MainText>Loading ..</MainText>;
    }

    if (isCorrect) {
      return (
        <MainContainer>
          <CorrectAnswerTransition word={vocabulary[questionIndex]} />
        </MainContainer>
      );
    }
    if (vocabulary.length > 0) {
      return (
        <MainContainer>
          <ExerciseByGender
            word={vocabulary[questionIndex]}
            onCorrectAnswer={this.onCorrectAnswer}
          />
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
