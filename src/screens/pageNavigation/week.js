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
export default class PageWeek extends React.Component {
  static navigationOptions = {
    title: 'week',
  };
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>pageWeek</Text>
      </View >


    );
  }
}

const styles = StyleSheet.create({

});
