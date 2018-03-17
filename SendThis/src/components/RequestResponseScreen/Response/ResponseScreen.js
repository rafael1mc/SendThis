import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import HeaderLiner from './../../Common/HeaderLiner';
import HeaderRow from './HeaderRow';
import { Color } from './../../../resources/styles/MainStyle';

class ResponseScreen extends Component {
  render() {
    const headers = this.props.headers.map((item, i) => {
      return <HeaderRow
        key={i}
        keyVal={item.key}
        valueVal={item.value}
      />
    });
 //https://www.npmjs.com/package/react-native-loading-spinner-overlay
    return (
      <View style={styles.root}>
        <HeaderLiner
          style={styles.headerLiner}
          textStyle={styles.headerLinerText}
          lineStyle={styles.headerLinerLine}
          text="Headers"
        />

        <View style={styles.headerContainer}>
          {headers}
        </View>

        <HeaderLiner
          style={styles.headerLiner}
          textStyle={styles.headerLinerText}
          lineStyle={styles.headerLinerLine}
          text="Body"
        />

        <View style={styles.bodyContainer}>
          <Text
            style={styles.body}
            selectable={true}
          >
            {this.props.body}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    headers: state.response.headers,
    body: state.response.body,
  };
};
/*
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {

    },
    dispatch
  );
};
*/

export default connect(mapStateToProps/*, mapDispatchToProps*/)(ResponseScreen);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.rootBackground,
  },
  containerScroll: {
    flex: 1,
  },

  headerLiner: {
    marginTop: 10,
  },
  headerLinerLine: {
    borderColor: Color.lightGray,
  },
  headerLinerText: {
    fontSize: 20,
    color: Color.gray,
  },

  headerContainer: {
    padding: 10,
  },

  bodyContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
  },

  body: {
    minHeight: 150,
    fontSize: 16,
    color: Color.primaryDark,
  },


  /*
    headerContainer: {
      height: '30%',
  
    },
    headerScroll: {
      flex: 1,
    },
  
    bodyContainer: {
      flex: 1,
      borderRadius: 7,
      borderWidth: 0,
      borderColor: Color.transparent,
      backgroundColor: Color.trueWhite,
    },
    bodyValue: {
      flex: 1,
      color: Color.primaryDark,
    },
    */
});