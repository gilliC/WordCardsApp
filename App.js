import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {View, Text} from 'react-native';

import store from './src/services/configureStore';
import {primaryColor} from './src/app_components';

import Home from './src/Home/Home';
import Vocabulary from './src/Vocabulary/Vocabulary';
import AddWord from './src/AddWord/AddWord';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
      },
      Vocabulary: {
        screen: Vocabulary,
      },
      AddWord: {screen: AddWord},
    },
    {
      initialRouteName: 'Home',
      headerMode: 'float',
      navigationOptions: {
        headerStyle: {
          backgroundColor: primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleStyle: {
          color: 'white',
        },
        headerTruncatedBackTitle: 'Back',
      },
    },
  ),
);
const App = () => {
  return (
    <Provider store={store()}>
      <AppNavigator />
    </Provider>
  );
};
export default App;
