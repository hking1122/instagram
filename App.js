import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Constants} from 'expo';
import AuthorRow from './components/AuthorRow';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <AuthorRow
            fullname={'First Last'}
            linkText={'Comments'}
            onPressLinkText={() => {
              console.log('Pressed link!');
            }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Constants.statusBarHeight,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
