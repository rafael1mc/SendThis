import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeBodyKeyAction, changeBodyValueAction } from './../../../actions/requestAction';
import KeyValue from './../../Common/KeyValue';

class BodyList extends React.Component {
  render() {
    const items = this.props.list.map((item, index) => {
      return <View key={'c' + index} style={styles.keyValue} >
        <KeyValue
          key={index}
          keyVal={item.key}
          valueVal={item.value}
          onChangeKey={(text) => this.props.changeKey(index, text)}
          onChangeValue={(text) => this.props.changeValue(index, text)}
          placeholderKey="Body Key..."
          placeholderValue="Body Value..."
        />
      </View>
    });
    return (
      <View style={styles.root}>
        {items}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.request.bodyData,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeKey: changeBodyKeyAction,
      changeValue: changeBodyValueAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyList);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  keyValue: {
    marginTop: 10,
  },
});