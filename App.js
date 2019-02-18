import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {ImageBackground, View, Text} from 'react-native';

import store from './src/services/configureStore';

import Home from './src/Home/Home';
import Vocabulary from './src/Vocabulary/Vocabulary';
import AddWord from './src/AddWord/AddWord';
import Practice from './src/Practice/Practice';

const imgSource = './src/drawable/background3.jpg';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: {screen: Home},
      Vocabulary: {screen: Vocabulary},
      AddWord: {screen: AddWord},
      Practice: {screen: Practice},
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none',
      cardStyle: {
        backgroundColor: 'transperent',
        shadowColor: 'transperent',
      },
    },
  ),
);
const App = () => {
  return (
    <ImageBackground
      source={require(imgSource)}
      style={{width: '100%', height: '100%'}}>
      <Provider store={store()}>
        <AppNavigator />
      </Provider>
    </ImageBackground>
  );
};
export default App;
