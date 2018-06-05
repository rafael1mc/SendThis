import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { changeRequestTab } from './../../actions/layoutAction';
import TabItem from './TabItem';
import { Color } from './../../resources/styles/MainStyle';

class Tabs extends Component {
  onPressRequest = () => {
    this.props.selectTab('Request');
  }
  onPressResponse = () => {
    this.props.selectTab('Response');
  }
  render() {
    let selected = {
      request: this.props.selectedTab == 'Request' ? true : false,
      response: this.props.selectedTab == 'Response' ? true : false,
    }
    return (
      <View style={styles.root}>
        <TabItem
          text="REQUEST"
          selected={selected.request}
          onPress={this.onPressRequest}
        />
        <TabItem
          text="RESPONSE"
          selected={selected.response}
          onPress={this.onPressResponse}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTab: state.layout.requestResponseTab
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      selectTab: changeRequestTab
    },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
  },
});