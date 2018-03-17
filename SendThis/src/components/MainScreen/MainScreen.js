import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Color, Font } from './../../resources/styles/MainStyle';
import MyRequestItem from './../MyRequestItem/MyRequestItem';

const requests = [
  { key: 0, name: 'Example Request 01', URL: 'http://www.example.com/foo', method: 'GET' },
  { key: 1, name: 'Example Request 02', URL: 'http://www.example.com/foo', method: 'GET' },
  { key: 2, name: 'Example Request 03', URL: 'http://www.example.com/foo/bar/foo/bar/foo/bar/foo/bar/', method: 'OPTIONS' },
  { key: 3, name: 'Example Request 04', URL: 'http://www.example.com/foo', method: 'POST' },
  { key: 4, name: 'Example Request 05', URL: 'http://www.example.com/foo', method: 'GET' },
];

class MainScreen extends Component {
  render() {
    const myRequestsItems = requests.map((item) => {
      return <MyRequestItem key={item.key} name={item.name} URL={item.URL} method={item.method} />
    });
    const emptyRequestList = (
      <Text>Foo Bar Placeholder Bleeehh</Text>
    );
    return (
      <View style={styles.root}>
        <View style={styles.headerBackground}>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require('./../../resources/icons/Logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.myRequestsOuterContainer}>
          <View style={styles.myRequestsContainer}>
            <View style={styles.myRequestsHeader}>
              <Text style={styles.myRequestsHeaderTitle}>
                MY REQUESTS
              </Text>
              <TouchableOpacity
                style={styles.myRequestsHeaderButtonShowAll}>
                <Text style={styles.myRequestsHeaderButtonTextShowAll}>
                  SHOW ALL
                </Text>
              </TouchableOpacity>
            </View>
            {myRequestsItems ? myRequestsItems : emptyRequestList}
          </View>
        </View>
        <View style={styles.createRequestContainer}>
          <TouchableOpacity
            style={styles.createRequestButton}>
            <Image
              source={require('./../../resources/icons/Add.png')}
              style={styles.createRequestButtonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MainScreen;


const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.rootBackground,
    justifyContent: 'space-between',
  },
  headerBackground: {
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

  // LOGO
  logoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
  },

  // REQUEST LIST
  myRequestsOuterContainer: {
    flex: 6,
  },
  myRequestsContainer: {
    flex: 1,
    margin: 10,
    paddingVertical: 10,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
  },
  myRequestsHeader: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 0.5,
  },
  myRequestsHeaderTitle: {
    color: Color.black20,
    fontSize: 14,
    fontFamily: Font.family,
    fontWeight: 'bold',
  },
  myRequestsHeaderButtonShowAll: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 10,
    //height: 30,
    backgroundColor: Color.primaryDark,
    borderColor: Color.transparent,
    borderRadius: 5,
    borderWidth: 0,
  },
  myRequestsHeaderButtonTextShowAll: {
    color: Color.trueWhite,
    fontSize: 14,
    fontFamily: Font.family,
    fontWeight: 'bold',
  },
  myRequestsBody: {
    marginHorizontal: 10,
  },

  // NEW REQUEST
  createRequestContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  createRequestButton: {
    flex: 1,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primaryDark,
    borderColor: Color.transparent,
    borderRadius: 5,
    borderWidth: 0,
  },
  createRequestButtonIcon: {
    height: '55%',
    resizeMode: 'contain',
  },

});