import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Picker } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { changeUrlAction, changeMethodAction } from './../../../actions/requestAction';
import HeaderLiner from './../../Common/HeaderLiner';
import KeyValue from './../../Common/KeyValue';
import HeaderList from './HeaderList';
import Body from './Body';
import { Color, Font } from './../../../resources/styles/MainStyle';

class RequestScreen extends Component {
  render() {
    let body = <View></View>;
    if (this.props.method == 'post') {
      body = (
        <View><HeaderLiner
          style={styles.headerLiner}
          textStyle={styles.headerLinerText}
          lineStyle={styles.headerLinerLine}
          text="Body"
        />

          <View style={styles.contentContainer}>
            <Body />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.urlMethodContainer}>
          <TextInput
            style={styles.url}
            value={this.props.url}
            onChangeText={this.props.changeUrl}
            placeholder="Place URL here..."
            placeholderTextColor={Color.lightGray}
            underlineColorAndroid="transparent"
          />
          <View style={styles.methodContainer}>
            <Picker
              mode='dropdown'
              style={styles.method}
              selectedValue={this.props.method}
              onValueChange={this.props.changeMethod}
            >
              <Picker.Item label="GET" value="get" />
              <Picker.Item label="POST" value="post" />
              {/*<Picker.Item label="PUT" value="put" />
              <Picker.Item label="PATCH" value="patch" />
              <Picker.Item label="DELETE" value="delete" />
              <Picker.Item label="OPTIONS" value="options" />
              <Picker.Item label="HEAD" value="head" />*/}
            </Picker>
          </View>
        </View>

        <HeaderLiner
          style={styles.headerLiner}
          textStyle={styles.headerLinerText}
          lineStyle={styles.headerLinerLine}
          text="Headers"
        />

        <View style={styles.headerContainer}>
          <HeaderList />
        </View>

        {body}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.request.url,
    method: state.request.method,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeUrl: changeUrlAction,
      changeMethod: changeMethodAction,
    },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestScreen);

const styles = StyleSheet.create({
  root: {
  },
  urlMethodContainer: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    padding: 10,
  },
  url: {
    flex: 1,
    padding: 10,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
    color: Color.primaryDark,
  },
  methodContainer: {
    width: 135,
    //padding: 10,
    marginLeft: 10,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
  },
  method: {
    //flex: 1,
    color: Color.primaryDark,
  },

  headerLiner: {
    //marginTop: 10,
    //marginBottom: 10,
  },
  headerLinerLine: {
    borderColor: Color.lightGray,
  },
  headerLinerText: {
    fontSize: 20,
    color: Color.gray,
  },

  headerContainer: {
    paddingHorizontal: 10,
  },

  contentContainer: {
    padding: 10,
  },


  /*
  url: {
    flex: 3,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,

    backgroundColor: Color.trueWhite,
    color: Color.primary,

    fontSize: 14,
    fontFamily: Font.family,
  },
  method: {
    flex: 1,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,

    backgroundColor: Color.trueWhite,
    color: Color.primary,

    fontSize: 14,
    fontFamily: Font.family,
  },

  headerContainer: {

  },
  queryStringContainer: {

  },

  bodyContainter: {

  },
  bodyType: {
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
    color: Color.primary,
  },

  bodyValue: {
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
    color: Color.primary,
    height: Math.min(35, this.state.height),
  }
*/
});