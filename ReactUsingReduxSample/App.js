/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import Header from './src/components/Header';
import LibraryList from './src/components/LibraryList';

/* Adding Redux */
// We need to add Provider from 'react-redux'
// We need to get Store from 'redux'
// We need to create Reducers, Action, State, Dispatcher,
// connect function , mapStateToProps
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
      <View style= { {flex: 1} }>
        <Header headerText = "Redux Sample"/>
        <LibraryList />
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
 
});
