/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AirPlayButton from 'react-native-airplay-button';

const App: () => Node = () => {
  const scrollViewStyle = {
    backgroundColor: Colors.darker,
    flexGrow: 1,
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={scrollViewStyle}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'blue',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}>
          <View
            style={{
              marginTop: 20,
              width: Dimensions.get('window').width,
              height: 60,
              backgroundColor: 'white',
              alignItems: 'center',
            }}>
            <AirPlayButton
              activeTintColor="blue"
              tintColor="red"
              style={{alignItems: 'center', width: 30, height: 30}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
