import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Color, Font } from './../../resources/styles/MainStyle';

export default class LineRequestItem extends PureComponent {
  render() {
    return (
      <TouchableOpacity
      style={styles.root}
      onPress={this.props.onPress}
      >
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
            <Text style={styles.method}>{this.props.method.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
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