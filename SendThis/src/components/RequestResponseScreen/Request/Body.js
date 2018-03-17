import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Picker, } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeBodyTypeAction } from './../../../actions/requestAction';
import BodyList from './BodyList';
import BodyRaw from './BodyRaw';
import { Color } from './../../../resources/styles/MainStyle';

class Body extends Component {
  render() {
    let bodyComponent = <View></View>;
    if (this.props.bodyType == 'form_url_encoded') {
      bodyComponent = <BodyList />
    } else if (this.props.bodyType == 'raw') {
      bodyComponent = <BodyRaw />;
    }

    return (
      <View style={styles.root}>
        <View style={styles.bodyStyleContainer}>
          <Picker
            mode='dropdown'
            style={styles.bodyType}
            selectedValue={this.props.bodyType}
            onValueChange={this.props.changeBodyType}
          >
            <Picker.Item label="Form URL Enconded" value="form_url_encoded" />
            <Picker.Item label="Raw" value="raw" />
          </Picker>
        </View>
        <View style={styles.bodyContentContainer}>
          {bodyComponent}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bodyType: state.request.bodyType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeBodyType: changeBodyTypeAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  bodyStyleContainer: {
    width: '100%', // TODO test without
    height: 50,
    marginTop: 10,
    //padding: 10,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,

  },
  bodyType: {
    color: Color.primaryDark,
  },
  bodyContentContainer: {
    minHeight: 150,
    marginTop: 10,
  },
  rawBody: {
    marginTop: 10,
    padding: 10,
    minHeight: 150,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
    textAlignVertical: 'top',
    color: Color.primaryDark,
    lineHeight: 25,
  },

});