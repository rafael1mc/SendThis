import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Color, Font } from './../../resources/styles/MainStyle';
import MyRequestItem from './../MyRequestItem/MyRequestItem';
import StorageUtil from './../../utils/StorageUtil';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }

  async componentDidMount() {
    let requests = await StorageUtil.getRequests();
    if (!requests) {
      requests = [];
    }
    if (requests.length > 5) {
      requests = requests.slice(0, 5);
    }
    this.setState({ requests: requests });
  }

  onPressShowAll = () => {
    alert('all');
  }

  onPressNewRequest = () => {
    alert('new');
  }

  render() {
    const myRequestsItems = this.state.requests.map((item, i) => {
      return <MyRequestItem key={i} name={item.name} URL={item.url} method={item.method} />
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
                style={styles.myRequestsHeaderButtonShowAll}
                onPress={this.onPressShowAll}
                >
                <Text style={styles.myRequestsHeaderButtonTextShowAll}>
                  SHOW ALL
                </Text>
              </TouchableOpacity>
            </View>
            {this.state.requests.length ? myRequestsItems : emptyRequestList}
          </View>
        </View>
        <View style={styles.createRequestContainer}>
          <TouchableOpacity
            style={styles.createRequestButton}
            onPress={this.onPressNewRequest}
            >
            <Image
              style={styles.createRequestButtonIcon}
              source={require('./../../resources/icons/Add.png')}
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
    width: '100%',
    height: 50,
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
    height: '40%',
    resizeMode: 'contain',
  },

});