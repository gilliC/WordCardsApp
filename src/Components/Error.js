import React from 'react';
import {MainButton, MainText, MainContainer} from './common_components';

export default props => {
  console.log(props);
  return (
    <MainContainer>
      <MainText>It seems like we have an error</MainText>
      <MainText fontSize={20}>{props.error.message}</MainText>
      <MainText fontSize={15} fontFamily="Oswald-Regular">
        You might want to check your internet connection
      </MainText>
    </MainContainer>
  );
};
