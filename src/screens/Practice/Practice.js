import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchData} from '../../services/actions/vocabulary_actions';
import {
  MainButton,
  MainText,
  MainContainer,
} from '../../components/common_components';
import {getRandom} from '../../services/functionsUtilities';

import ExerciseByGender from './ExerciseByGender';
import CorrectAnswerTransition from './CorrectAnswerTransition';
import FinishedPracticing from './FinishedPracticing';
import ErrorComponent from '../../components/Error';
import ExplanationByGender from './ExplanationByGender';

class Practice extends Component {
  constructor(props) {
    super(props);
    let questionIndex = props.vocabularyCount
      ? getRandom(props.vocabularyCount)
      : -1;
    this.state = {
      vocabulary: this.props.vocabulary,
      questionIndex: questionIndex,
      showExplanation: true,
      isCorrect: false,
      isFinish: false,
    };
    this.onCorrectAnswer = this.onCorrectAnswer.bind(this);
    this.onFinishTransition = this.onFinishTransition.bind(this);
    this.onFinishExplnation = this.onFinishExplnation.bind(this);
  }
  componentDidMount() {
    if (!this.props.vocabularyCount) {
      this.props.fetchData();
    }
  }
  componentWillReceiveProps(nextProps) {
    const {questionIndex} = this.state;
    if (questionIndex === -1 && nextProps.vocabularyCount) {
      let newIndex = this.getNewQuestion(
        nextProps.vocabularyCount,
        questionIndex,
      );
      if (this.props.vocabularyCount !== nextProps.vocabularyCount)
        this.setState({
          questionIndex: newIndex,
          isCorrect: false,
          vocabulary: nextProps.vocabulary,
        });
      else this.setState({questionIndex: newIndex, isCorrect: false});
    }
  }
  onFinishExplnation() {
    this.setState({showExplanation: false});
  }
  onCorrectAnswer() {
    this.setState({isCorrect: true});
    setTimeout(this.onFinishTransition, 2000);
  }
  onFinishTransition() {
    const oldIndex = this.state.questionIndex;
    let newVocabulary = this.state.vocabulary.slice();
    newVocabulary.splice(oldIndex, 1);
    if (newVocabulary.length === 0) this.setState({isFinish: true});
    else {
      // console.log({name: 'NOT EMPTY', val: newVocabulary});
      const newIndex = this.getNewQuestion(newVocabulary.length, oldIndex);
      this.setState({
        vocabulary: newVocabulary,
        questionIndex: newIndex,
        isCorrect: false,
      });
    }
  }
  getNewQuestion(max, lastIndex) {
    let newIndex = lastIndex;
    while (newIndex === lastIndex) newIndex = getRandom(max);
    return newIndex;
  }
  render() {
    let component = <MainText>Wait ..</MainText>;
    const {error, loading, navigation} = this.props;
    const {
      vocabulary,
      questionIndex,
      showExplanation,
      isCorrect,
      isFinish,
    } = this.state;

    if (showExplanation)
      return (
        <ExplanationByGender onFinishExplnation={this.onFinishExplnation} />
      );
    if (isFinish) return <FinishedPracticing navigation={navigation} />;
    if (error) return <ErrorComponent error={error} />;
    if (loading || questionIndex === -1) return <MainText>Loading ..</MainText>;
    if (isCorrect)
      return <CorrectAnswerTransition word={vocabulary[questionIndex]} />;

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
