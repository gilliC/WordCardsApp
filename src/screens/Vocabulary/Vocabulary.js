import React from 'react';

import VocabularyList from './VocabularyList';
import {MainButton, MainContainer} from '../../components/common_components';
import {VocabularyContainer, VocabularyBottom} from './vocabulary_components';

export default props => {
  const navigaiteAddWord = () => {
    props.navigation.navigate('AddWord');
  };
  return (
    <VocabularyContainer onSwipeUp={navigaiteAddWord}>
      <MainContainer>
        <VocabularyList />
      </MainContainer>
      <VocabularyBottom>
        <MainButton text="Add a word" onPress={navigaiteAddWord} />
      </VocabularyBottom>
    </VocabularyContainer>
  );
};
