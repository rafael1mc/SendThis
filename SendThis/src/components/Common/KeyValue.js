import React from 'react';
import { View, TextInput, StyleSheet, } from 'react-native';
import { Color } from './../../resources/styles/MainStyle';

const KeyValue = (props) => {
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.headerKey}
        value={props.key}
        placeholder={props.placeholderKey}
        placeholderTextColor={Color.lightGray}
        underlineColorAndroid='transparent'
        onChangeText={props.onChangeKey}
      />
      <TextInput
        style={styles.headerValue}
        value={props.value}
        placeholder={props.placeholderValue}
        placeholderTextColor={Color.lightGray}
        underlineColorAndroid='transparent'
        onChangeText={props.onChangeValue}
      />
    </View>
  );
}

export default KeyValue;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  headerKey: {
    flex: 1,
    marginRight: 5,
    padding: 10,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
    color: Color.primaryDark,
  },
  headerValue: {
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