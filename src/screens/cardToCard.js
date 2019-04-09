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
export default class CardToCard extends React.Component {
  static navigationOptions = {
    title: 'All',
  };
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  rederScreenAtm = () => {
  
    this.props.navigation.navigate('CardToCardAtm')

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={this.rederScreen}>
            <Text style={styles.TransferText}>Transaction from</Text>
          </TouchableOpacity>
          <Text style={styles.fundText}>Select card/acount to be debited</Text>
        </View>

        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={this.rederScreen}>
            <Text style={styles.TransferText}>Amount</Text>
          </TouchableOpacity>
          <View style={styles.border}>
          </View>
        </View>

        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={this.rederScreen}>
            <Text style={styles.TransferText}>Transfer to</Text>
          </TouchableOpacity>
          <Text style={styles.fundText}>Select card/acount to be creadited </Text>
        </View>

        <View style={styles.firstContainerButton}>
        <TouchableOpacity
            style={styles.EnterButton}
            underlayColor='#fff'>
            <View>
              <View>
                <Text style={styles.enterText} onPress={this.rederScreenAtm}>continue</Text>
              </View>
            </View>
          </TouchableOpacity>
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
    paddingTop: 60

  },
  firstContainerButton:{
    justifyContent:'center',
    alignItems:'center',
    paddingTop: 60

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

  },
  EnterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: "#731c26",
    borderRadius: 50,
    borderWidth: 0,
    width: (window.width - 30) / 2,
  },
  enterText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },


});
