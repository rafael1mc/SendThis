import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, View, Text, } from 'react-native';
import { Color, Font } from './../../resources/styles/MainStyle';

const TabItem = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={props.onPress}
    >
      <View
        style={[styles.root, {
          backgroundColor: props.selected ?
            Color.primaryDark :
            Color.primary
        }]}
      >
        <View>
          <Text style={styles.text}>
            {props.text}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default TabItem;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
  },
  text: {
    margin: 20,
    fontFamily: Font.family,
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.trueWhite,
  },
});