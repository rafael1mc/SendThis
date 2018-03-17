import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

class TestScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={[styles.lineLeft, this.props.lineStyle]}>
        </View>
        <Text style={styles.text}>Some Text</Text>
        <View style={[styles.lineRight, this.props.lineStyle]}></View>
      </View>
    );
  }
}

export default TestScreen;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineLeft: {
    height: 0,
    flex: 1,
    borderWidth: 0.5,
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 16,
    textAlignVertical: 'center',
  },
  lineRight: {
    flex: 1,
    borderWidth: 0.5,
  }
});