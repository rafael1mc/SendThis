import React from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import Tabs from './Tabs';
import Request from './Request/RequestScreen';
import Response from './Response/ResponseScreen';
import Footer from './Footer';
import { Color } from './../../resources/styles/MainStyle';

class RequestResponseScreen extends React.Component {
  render() {
    let content = <Request />;
    if (this.props.content == 'Response') {
      content = <Response />;
    }
    return (
      <View style={styles.root}>
        <Spinner visible={this.props.loadingVisible} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
        <View style={styles.tabContainer}>
          <Tabs />
        </View>
        <ScrollView
          style={styles.contentContainer}
          keyboardShouldPersistTaps='handled'>
          {content}
        </ScrollView>
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </View>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    content: state.layout.requestResponseTab,
    loadingVisible: state.layout.isLoading,
  }
}

export default connect(mapStateToProps)(RequestResponseScreen);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: Color.rootBackground,
  },
  tabContainer: {
    height: 60,
  },
  contentContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 0,
    height: 70,

    //elevation: 3,
    //backgroundColor: 'white',
  }
});