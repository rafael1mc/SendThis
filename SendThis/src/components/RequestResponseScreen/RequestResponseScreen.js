import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, TextInput, } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeNameAction, saveRequestAction } from './../../actions/requestAction';
import Spinner from 'react-native-loading-spinner-overlay';
import Tabs from './Tabs';
import Request from './Request/RequestScreen';
import Response from './Response/ResponseScreen';
import Footer from './Footer';
import PopupDialog from 'react-native-popup-dialog';
import { Color } from './../../resources/styles/MainStyle';

class RequestResponseScreen extends React.Component {
  onClickMenu = () => {
    this.popupDialog.show();
  }

  hideMenu = () => {
    this.popupDialog.dismiss();
  }

  onPressSave = () => {
    this.hideMenu();
    this.props.save();
  }

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
          <Footer onClickMenu={this.onClickMenu} />
        </View>

        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
        >
          <View style={{
            paddingHorizontal: 10,
            backgroundColor: Color.rootBackground,
            paddingVertical: 30,
            borderRadius: 10,
            flex: 1,
          }}>
            <Text style={{ color: Color.black40 }}>Name</Text>
            <TextInput
              style={styles.requestName}
              value={this.props.name}
              placeholder="Name"
              placeholderTextColor={Color.lightGray}
              underlineColorAndroid='transparent'
              onChangeText={this.props.changeName}
            />
            <TouchableOpacity
              style={{
                marginTop: 20,
                height: 50,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Color.primary,
                borderRadius: 10,
              }}
              onPress={this.onPressSave}
            >
              <Text style={{
                color: '#FFF',
                fontSize: 18, fontWeight: 'bold',
              }}>SAVE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                let { navigate } = this.props.navigation;
                navigate('Main');
              }}
              style={{ height: 50, marginTop: 20, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: Color.primary }}
            >
              <Text style={{ color: '#FFF', fontWeight: 'bold', }}>Main Menu</Text>
            </TouchableOpacity>

          </View>
        </PopupDialog>

      </View >
    );

  }
}

const mapStateToProps = (state) => {
  return {
    content: state.layout.requestResponseTab,
    loadingVisible: state.layout.isLoading,
    name: state.request.name,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeName: changeNameAction,
      save: saveRequestAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestResponseScreen);

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
  },

  requestName: {
    height: 50,
    width: '100%',
    marginTop: 10,
    marginRight: 5,
    padding: 10,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: Color.transparent,
    backgroundColor: Color.trueWhite,
    color: Color.primaryDark,
  },
});