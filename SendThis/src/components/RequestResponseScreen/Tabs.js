import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { changeRequestTab } from './../../actions/layoutAction';
import TabItem from './TabItem';
//import RequestScreen from './RequestScreen';
//import ResponseScreen from './ResponseScreen';
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
  /*
  onPressTabItem = (itemName) => {
    this.props.onChange(itemName);
  }

  render() {
    return (
      <View style={styles.root}>
        <TabItem
          name={this.state.items.request.name}
          selected={this.state.items.request.selected}
          onPress={this.onPressTabItem(this.state.item.response.name)}
        />
        <TabItem
          name={this.state.items.response.name}
          selected={this.state.items.response.selected}
          onPress={this.onPressTabItem(this.state.items.response.name)}
        />
      </View>
    );
  }
  */
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