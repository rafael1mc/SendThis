import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Color } from './../../../resources/styles/MainStyle';

const HeaderRow = (props) => {
  return (
    <View style={styles.root}>
      <Text
        style={styles.headerKey}
        selectable
      >
        {props.keyVal}
      </Text>

      <View style={styles.divider}></View>

      <Text
        style={styles.headerValue}
        selectable
      >
        {props.valueVal}
      </Text>
    </View >
  );
}

export default HeaderRow;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 50,
    paddingVertical: 5,
  },
  headerKey: {
    flex: 1,
    padding: 10,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    borderRightWidth: 0.5,
    borderRightColor: Color.black10,
    backgroundColor: Color.trueWhite,
    color: Color.primaryDark,
  },
  divider: {
    borderWidth: 0.3,
    borderColor: Color.lightGray,
  },
  headerValue: {
    flex: 1,
    padding: 10,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    borderLeftWidth: 0.5,
    borderLeftColor: Color.black10,
    backgroundColor: Color.trueWhite,
    //color: Color.primaryDark,
  }
});