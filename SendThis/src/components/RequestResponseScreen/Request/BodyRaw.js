import React, { Component } from 'react';
import { View, TextInput, StyleSheet, } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeBodyRawAction } from './../../../actions/requestAction';
import { Color } from './../../../resources/styles/MainStyle';

class BodyRaw extends Component {
  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder="Body content..."
        placeholderTextColor={Color.lightGray}
        multiline
        underlineColorAndroid="transparent"
        value={this.props.rawBody}
        onChangeText={this.props.changeRawBody}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rawBody: state.request.bodyRaw,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeRawBody: changeBodyRawAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyRaw);

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
    textAlignVertical: 'top',
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
    color: Color.primaryDark,
  },
});