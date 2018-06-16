import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { Color } from './../../resources/styles/MainStyle';

export default class RequestItem extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5, marginLeft: 7, marginRight: 10, paddingHorizontal: 10, borderRadius: 10, borderWidth: 1, borderColor: Color.black10, minHeight: 50, }}>
        <Text style={styles.itemValue}>
          {this.props.keyValue}
        </Text>
        <View style={{ backgroundColor: Color.black10, width: 1, height: '100%', }}></View>
        <Text style={[{ marginLeft: 10, }, styles.itemValue]}>
          {this.props.valueValue}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemValue: {
    flex: 1,
    fontSize: 16,
    color: Color.primary,
  },

});