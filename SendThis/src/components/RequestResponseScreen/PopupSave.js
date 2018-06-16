import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import { Color } from './../../resources/styles/MainStyle';

export default class PopupSave extends Component {
  render() {
    return (
      <PopupDialog
        ref={(popupDialog) => { this.props.popupDialog = popupDialog; }}
      >
        <View style={{
          paddingHorizontal: 10,
          backgroundColor: Color.rootBackground,
          paddingVertical: 30,
          borderRadius: 10,
          flex: 1,
        }}>
          <Text style={{ color: Color.black40 }}>Name</Text>
          <TextInput
            style={styles.requestName}
            value={this.props.name}
            placeholder="Name"
            placeholderTextColor={Color.lightGray}
            underlineColorAndroid='transparent'
            onChangeText={this.props.onChangeName}
          />
          <TouchableOpacity
            style={{}}
            onPress={this.onPressSave}
          >
            <Text style={{}}>Save</Text>
          </TouchableOpacity>
        </View>
      </PopupDialog>
    );
  }
}

const styles = StyleSheet.create({
  requestName: {
    height: 50,
    width: '100%',
    marginRight: 5,
    padding: 10,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
    color: Color.primaryDark,
  },
});