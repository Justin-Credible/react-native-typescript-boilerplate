
import * as React from "react";
import { Component } from "react";

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from "react-native";

class SampleApp1 extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } as __React.ViewStyle,

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  } as __React.TextStyle,

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  } as __React.TextStyle,
});

AppRegistry.registerComponent('SampleApp1', () => SampleApp1);
