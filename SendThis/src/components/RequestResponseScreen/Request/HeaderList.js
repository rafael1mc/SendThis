import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeHeaderKeyAction, changeHeaderValueAction } from './../../../actions/requestAction';
import HeaderRow from './HeaderRow';

class HeaderList extends Component {
  render() {
    const rows = this.props.headers.map((item, i) => {
      return (
        <View key={'c' + i} style={styles.headerRow}>
          <HeaderRow
            key={i}
            id={i}
            keyVal={item.key}
            valueVal={item.value}
            onChangeKey={(text) => this.props.changeHeaderKey(i, text)}
            onChangeValue={(text) => this.props.changeHeaderValue(i, text)}
          />
        </View>
      );
    });
    return (
      <View style={styles.root}>
        {rows}
      </View >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    headers: state.request.headers
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeHeaderKey: changeHeaderKeyAction,
      changeHeaderValue: changeHeaderValueAction,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderList);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
  headerRow: {
    marginBottom: 10,
  },
});