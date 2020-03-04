import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import StackNavigator from './app/navigation/Stacks';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="#5C667F" barStyle="light-content" />
        <SafeAreaView style={{ flex: 1 }} backgroundColor="#5C667F">
          <StackNavigator />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
