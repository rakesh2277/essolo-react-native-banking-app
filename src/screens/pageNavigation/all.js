import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
var window = Dimensions.get('window');
export default class PageAll extends React.Component {
  static navigationOptions = {
    title: 'All',
  };
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>pageall</Text>
  
      </View >


    );
  }
}

const styles = StyleSheet.create({

});
