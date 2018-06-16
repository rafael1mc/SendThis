import React from 'react';
import { View, TouchableHighlight, TouchableOpacity, Image, StyleSheet, } from 'react-native';
import { Color } from './../../resources/styles/MainStyle';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendRequestAction } from './../../actions/requestAction';

class Footer extends React.Component {
  onClickSend = () => {
    if (this.props.url.trim() == '') {
      alert('Please, insert URL.');
    } else {
      this.props.sendRequest();
    }
  }

  onClickMenu = () => {
    this.props.onClickMenu();
  }

  render() {
    return (
      <View style={styles.root}>
        <TouchableHighlight
          style={styles.buttonMenu}
          onPress={this.onClickMenu}
        >
          <Image
            style={styles.iconMenu}
            source={require('./../../resources/icons/menu.png')}
            tintColor="#FFFFFF"
          />
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.buttonSend}
          onPress={this.onClickSend}
        >
          <Image
            style={styles.iconSend}
            source={require('./../../resources/images/Logo.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.request.url,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      sendRequest: sendRequestAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonMenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primaryDark,
  },
  iconMenu: {
    height: '70%',
    resizeMode: 'contain',
  },
  buttonSend: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary
  },
  iconSend: {
    height: '80%',
    resizeMode: 'contain',
  },
});