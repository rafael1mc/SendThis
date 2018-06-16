import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import MyRequestItem from './../LineRequestItem/LineRequestItem';
import { Color, Font } from './../../resources/styles/MainStyle';
import StorageUtil from './../../utils/StorageUtil';

class MyRequestsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
    };
  }

  async componentDidMount() {
    let requests = await StorageUtil.getRequests();
    if (!requests) {
      requests = [];
    }
    this.setState({ requests: requests });
  }

  render() {
    const myRequestsItems = this.state.requests.map((item) => {
      return <MyRequestItem key={item.id} name={item.name} URL={item.URL} method={item.method} />
    });
    const emptyRequestList = (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: Color.black30, fontSize: 18, fontWeight: 'bold' }}>
          No Requests
        </Text>
      </View>
    );
    return (
      <View style={styles.root}>
        <View style={styles.headerBackground1}></View>
        <View style={styles.headerBackground2}></View>

        <View style={styles.requestsOuterContainer}>
          <View style={styles.requestsHeader}>
            <Text style={styles.requestsHeaderTitle}>
              MY REQUESTS
              </Text>
          </View>
          {
            this.state.requests.length > 0
              ?
              <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewItem}
              >
                {myRequestsItems}
              </ScrollView>
              :
              emptyRequestList
          }

        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={this.onPressButtonBack}
            >
              <Image
                style={styles.iconBack}
                source={require('./../../resources/icons/back.png')} />
            </TouchableOpacity>
            <View style={styles.buttonSeparator}></View>
            <TouchableOpacity
              disabled={true}
              style={styles.buttonSearch}
              onPress={this.onPressButtonSearch}
            >
              <Image
                style={styles.iconSearch}
                source={require('./../../resources/icons/search.png')} />
            </TouchableOpacity>
            <View style={styles.buttonSeparator}></View>
            <TouchableOpacity
              style={styles.buttonNew}
              onPress={this.onPressButtonNew}
            >
              <Image
                style={styles.iconNew}
                source={require('./../../resources/icons/new.png')} />
            </TouchableOpacity>
          </View>
        </View >
      </View >
    );
  }
}

export default MyRequestsScreen;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.rootBackground,
    padding: 15,
  },
  headerBackground1: {
    position: 'absolute',
    width: width * 1.5,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 220,
    borderRightWidth: width * 1.5,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: Color.primary,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  headerBackground2: {

    position: 'absolute',
    marginTop: 0,
    width: width * 1,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 350,
    borderLeftWidth: 0,
    borderBottomWidth: 280,
    borderRightWidth: width * 1.5,
    borderTopColor: Color.transparent,
    borderRightColor: Color.primary,
    borderBottomColor: Color.transparent,
    borderLeftColor: Color.transparent,

    height: height + 70,
    //width: 200,
  },
  requestsOuterContainer: {
    flex: 1,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
  },

  requestsHeader: {
    height: 70,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 0.5,
  },
  requestsHeaderTitle: {
    color: Color.black20,
    fontSize: 14,
    fontFamily: Font.family,
    fontWeight: 'bold',
  },

  scrollView: {
    flex: 1,
    padding: 10,
  },
  scrollViewItem: {
    paddingBottom: 10,
  },

  buttonContainer: {
    height: 110,
    justifyContent: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 30,
  },
  buttonSeparator: {
    borderWidth: 0.5,
    borderColor: Color.primary,
  },
  buttonBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    backgroundColor: Color.primaryDark,
  },
  buttonSearch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.gray,
  },
  buttonNew: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: Color.primaryDark,
  },
  iconBack: {
    height: '50%',
    resizeMode: 'contain',
  },
  iconSearch: {
    height: '50%',
    resizeMode: 'contain',
  },
  iconNew: {
    height: '50%',
    resizeMode: 'contain',
  },

});