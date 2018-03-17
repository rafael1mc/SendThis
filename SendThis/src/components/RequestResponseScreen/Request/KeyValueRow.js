import React, { Component } from 'react';
import { View, TextInput, StyleSheet, } from 'react-native';
import { Color } from './../../../resources/styles/MainStyle';

const KeyValueRow = (props) => {
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.key}
        value={props.keyVal}
        placeholder={props.placeholderKey}
        placeholderTextColor={Color.lightGray}
        underlineColorAndroid='transparent'
        onChangeText={props.onChangeKey}
      />
      <TextInput
        style={styles.value}
        value={props.valueVal}
        placeholder={props.placeholderValue}
        placeholderTextColor={Color.lightGray}
        underlineColorAndroid='transparent'
        onChangeText={props.onChangeValue}
      />
    </View>
  );
}

export default KeyValueRow;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
  },
  key: {
    flex: 1,
    marginRight: 5,
    padding: 10,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
    color: Color.primaryDark,
  },
  value: {
    flex: 1,
    marginLeft: 5,
    padding: 10,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
    color: Color.primaryDark,
  }
});