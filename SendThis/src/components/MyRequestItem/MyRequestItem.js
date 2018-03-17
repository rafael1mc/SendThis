import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color, Font } from './../../resources/styles/MainStyle';

export default class MyRequestItem extends PureComponent {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.innerContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.name}>{this.props.name}</Text>
            <Text
              ellipsizeMode='middle'
              numberOfLines={1}
              style={styles.URL}>{
                this.props.URL /*.length > 35 ? this.props.URL.substring(0, 35) + '...' : this.props.URL*/
              }
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.method}>{this.props.method}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 2,
    height: 65,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingRight: 5,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 0.5,
  },
  leftContainer: {
    flex: 3,
    justifyContent: 'center',

  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',

  },
  name: {
    color: Color.primaryDark,
    fontFamily: Font.family,
    fontSize: 14,

  },
  URL: {
    color: Color.black30,
    fontFamily: Font.familyMonospace,
    fontSize: 12,

  },
  method: {
    color: Color.primaryDark,
    fontFamily: Font.family,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  }
});