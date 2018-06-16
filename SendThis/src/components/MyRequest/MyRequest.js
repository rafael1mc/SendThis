import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { setRequestAction } from './../../actions/requestAction';
import { Color, Font } from './../../resources/styles/MainStyle';
import RequestItem from './RequestItem';

const bodyTypeMap = {
  form_url_encoded: 'Form URL Encodede',
}

class MyRequest extends Component {
  onPressEdit = () => {
    this.props.setRequest(this.props.navigation.getParam('item'));
    let { navigate } = this.props.navigation;
    navigate('RequestResponse');
  }

  render() {
    let request = this.props.navigation.getParam('item');
    let headers = request.headers.map((item, i) => {
      return <RequestItem
        key={i}
        keyValue={item.key}
        valueValue={item.value}
      />
    });
    let bodyData = '';
    if (request.bodyType == 'form_url_encoded') {
      bodyData = request.bodyData.map((item, i) => {
        return <RequestItem
          key={i}
          keyValue={item.key}
          valueValue={item.value}
        />
      });
    } else {
      bodyData = (<View style={{ marginTop: 5, marginLeft: 7, marginRight: 10, padding: 10, borderRadius: 10, borderWidth: 2, borderColor: Color.black10, minHeight: 100, }}>
        <Text style={styles.value}>
          {request.bodyRaw}
        </Text>
      </View>)
    }
    return (
      <View style={styles.root}>
        <View style={styles.headerBackground}></View>
        <View style={styles.logoContainer}>
          <Image
            source={require('./../../resources/icons/Logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.myRequestOuterContainer}>
          <View style={styles.myRequestContainer}>
            <View style={styles.myRequestHeader}>
              <Text style={styles.myRequestHeaderTitle}>
                MY REQUEST  -  </Text>
              <Text style={{ color: Color.primary, fontWeight: 'bold' }}>{request.name}</Text>
            </View>
            <ScrollView style={{ padding: 10 }}>
              <Text style={styles.label}>URL</Text>
              <Text style={styles.value}>{request.url}</Text>
              <View style={{ flexDirection: 'row', }}>
                <View style={{ flex: 1, }}>
                  <Text style={styles.label}>Method</Text>
                  <Text style={styles.value}>{request.method.toUpperCase()}</Text>
                </View>
                <View style={{ flex: 1, }}>
                  <Text style={styles.label}>Body Type</Text>
                  <Text style={styles.value}>
                    {bodyTypeMap[request.bodyType] ?
                      bodyTypeMap[request.bodyType] :
                      request.bodyType}
                  </Text>
                </View>
              </View>
              <Text style={styles.label}>Headers</Text>
              {headers}
              <Text style={styles.label}>Body Data</Text>
              {bodyData}
              <View style={{ marginBottom: 10 }}></View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.editRequestContainer}>
          <TouchableOpacity
            style={styles.editRequestButton}
            onPress={this.onPressEdit}
          >
            <Image
              style={styles.editRequestButtonIcon}
              source={require('./../../resources/icons/Edit.png')}
              tintColor="#FFFFFF"
            />
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setRequest: setRequestAction,
    },
    dispatch);
};

export default connect(null, mapDispatchToProps)(MyRequest);


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
  myRequestOuterContainer: {
    flex: 6,
  },
  myRequestContainer: {
    flex: 1,
    margin: 10,
    paddingVertical: 10,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
  },
  myRequestHeader: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 0.5,
  },
  myRequestHeaderTitle: {
    color: Color.black20,
    fontSize: 14,
    fontFamily: Font.family,
    fontWeight: 'bold',
  },

  label: {
    marginTop: 15,
    fontSize: 14,
    color: Color.black40,
  },
  value: {
    marginTop: 5,
    marginLeft: 7,
    fontSize: 16,
    color: Color.primary,
  },

  // EDIT REQUEST
  editRequestContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  editRequestButton: {
    flex: 1,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primaryDark,
    borderColor: Color.transparent,
    borderRadius: 5,
    borderWidth: 0,
  },
  editRequestButtonIcon: {
    height: '40%',
    resizeMode: 'contain',
  },

});