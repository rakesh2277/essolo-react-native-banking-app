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

export default class CardToCardFinal extends React.Component {
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
        <View style={styles.firstContaeiner}>
          <View style={styles.firstContMain}>

            <View style={styles.firstInner}>
              <Text style={styles.transactionText}>Transaction Successfully</Text>
              <Text style={styles.completedText}>Completed</Text>
            </View>

            <View style={styles.firstMainContainer}>
              <View style={styles.secondtInner}>
                <Text style={styles.fromCardTExt}>from Card</Text>
                <Text style={styles.completedText}>4651 **** **** 9411</Text>
              </View>

              <View style={styles.thirdInner}>
                <Text style={styles.fromCardTExt}>to card</Text>
                <Text style={styles.cardNumText}>4651 **** **** 9411</Text>
              </View>        
       

            </View>

            <View style={styles.amountInner}>
                <Text style={styles.AmoutTExt}>Amount</Text>
                <Text style={styles.AmoutTExtMain}>$12,6465</Text>
              </View>
            <View style={styles.sendInner}>
                <Text style={styles.lastTExt}>save or send reciept to as a documen or imaget</Text>

              </View>
          </View>


          <View style={styles.lastContenrer}>
            <View style={styles.firstContainerButton}>
              <TouchableOpacity
                style={styles.EnterButton}
                underlayColor='#fff'>
                <View>
                  <View>
                    <Text style={styles.enterText} onPress={this.rederFinnal}>continue</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
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
  firstContaeiner: {
    // paddingTop: 30,
    // justifyContent: 'center',
    // alignItem: 'center'

  },
  firstContMain:{
    height:"75%",
    paddingTop:70
  },
  firstMainContainer: {
    padding: 30

  },
  firstInner: {
    justifyContent:'center',
    alignItems:'center'

  },
  thirdInner:{
    paddingTop:10
  },
  transactionText: {
    fontSize: 30
  },
  completedText: {
    fontSize: 20

  },
  fromCardTExt: {
    fontSize: 25

  },
  sendInner:{
    justifyContent:'center',
    alignItems:'center',
    paddingTop:30
    
  },
  amountInner:{
    paddingTop:25,
    paddingLeft:30,
    paddingRight:30

  },
  cardNumText: {
    fontSize: 20

  },
  AmoutTExt: {
    fontSize: 20

  },
  AmoutTExtMain:{
    fontSize: 20,
    fontWeight:'bold'

  },
  lastTExt: {
    fontSize: 15

  },
  lastContenrer:{
    height:"25%",
    paddingTop:20

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
  firstContainerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30

  },
  enterText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },



});
