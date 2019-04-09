import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
var window = Dimensions.get('window');
import { Col, Row, Grid } from "react-native-easy-grid";
export default class Transfer extends React.Component {
  static navigationOptions = {
    title: 'All',
  };
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  rederScreen = () => {
 

    this.props.navigation.navigate('CardToCard')

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={this.rederScreen}>
            <Text style={styles.TransferText}>Transfer</Text>
          </TouchableOpacity>
          <Text style={styles.fundText}>Fund Transfer</Text>
          <View style={styles.border}>
          </View>
        </View>

        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={this.rederScreen}>
            <Text style={styles.TransferText}>Send</Text>
          </TouchableOpacity>
          <Text style={styles.fundText}>Money</Text>
          <View style={styles.border}>
          </View>
        </View>

        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={this.rederScreen}>
            <Text style={styles.TransferText}>One-Time</Text>
          </TouchableOpacity>
          <Text style={styles.fundText}>Fund Transfer</Text>
          <View style={styles.border}>
          </View>
        </View>

        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={this.rederScreen}>
            <Text style={styles.TransferText}>Schedule</Text>
          </TouchableOpacity>
          <Text style={styles.fundText}>Fund Transfer</Text>
          <View style={styles.border}>
          </View>
        </View>

        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={this.rederScreen}>
            <Text style={styles.TransferText}>Digital</Text>
          </TouchableOpacity>
          <Text style={styles.fundText}>banking</Text>
          <View style={styles.border}>
          </View>
        </View>
      </View >


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContainer: {
    padding: 10,
    paddingLeft: 35,
    paddingTop: 20

  },
  TransferText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black'

  },
  fundText: {
    fontSize: 20
  },
  border: {
    // paddingLeft:10,
    // paddingRight:10,
    paddingTop: 15,
    marginRight: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1

  }


});
