import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const HeaderLiner = (props) => {
  return (
    <View style={[styles.root, props.style]}>
      <View style={[styles.lineLeft, props.lineStyle]}>
      </View>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      <View style={[styles.lineRight, props.lineStyle]}></View>
    </View>
  );
}

export default HeaderLiner;

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