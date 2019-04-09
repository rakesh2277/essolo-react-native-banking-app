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
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
var uuid = require('react-native-uuid');
import moment from 'moment'
var XMLParser = require('react-xml-parser');
var DomParser = require('react-native-html-parser').DOMParser
import axios from 'axios';


export default class CardToCardAtm extends React.Component {
  static navigationOptions = {
    title: 'All',
  };
  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff',
      cardData: '',
      balance: '',
      cardNum:''


    };
  }
  rederFinnal = () => {
    this.props.navigation.navigate('CardToCardFinal')
  }
  // onSwipeUp(gestureState) {
  //   this.setState({ myText: 'You swiped up!' });
  // }

  // onSwipeDown(gestureState) {
  //   this.setState({ myText: 'You swiped down!' });
  // }

  onSwipeLeft(gestureState) {
    this.setState({ myText: 'You swiped left!' });
  }

  onSwipeRight(gestureState) {
    this.setState({ myText: 'You swiped right!' });
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
    switch (gestureName) {
      // case SWIPE_UP:
      //   this.setState({ backgroundColor: 'red' });
      //   break;
      // case SWIPE_DOWN:
      //   this.setState({ backgroundColor: 'green' });
      //   break;
      case SWIPE_LEFT:
        this.setState({ backgroundColor: 'blue' });
        break;
      case SWIPE_RIGHT:
        this.setState({ backgroundColor: 'yellow' });
        break;
    }
  }
  componentDidMount() {
    let sr = `<?xml version="1.0" encoding="utf-8"?>
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Header>
      <AuthHeader xmlns="http://www.tsbestcardsystems.net/CEMSGS/">
      <ClientId>${uuid.v4()}</ClientId>
      <StationId>CARDSTATION6908</StationId>
      <LoginName>cardSerUser6908</LoginName>
      <Password>cardSerUser6908</Password>
      <LocalTime>${moment().format('YYYY-MM-DDTHH:MM:SS')}</LocalTime>
      </AuthHeader>
      </soap12:Header>
      <soap12:Body>
      <GetBalanceOnCard xmlns="http://www.tsbestcardsystems.net/CEMSGS/">
      <cardInfo>
        <CustomerId>00000000-0000-0000-0000-000000000000</CustomerId>
          <CardTokenId>286728280961041</CardTokenId>
      </cardInfo>
    </GetBalanceOnCard>   
     </soap12:Body>
      </soap12:Envelope>`    
    axios
      .post('https://tsbestcardsystems.net/CEMSGlobalServices/CEMSGS.asmx', sr, {
        headers: {
          'Content-Type': 'text/xml',
          SOAPAction: 'http://www.tsbestcardsystems.net/CEMSGS/GetBalanceOnCard'
        }
      })
      .then(response => {
        // console.log('_______reponseAxios', response.data)
        this.setState({
          cardData: response.data
        }) 
        var xml = new XMLParser().parseFromString(this.state.cardData);
        var bal = xml.getElementsByTagName('Balance')[0].value 
        var cn =xml.getElementsByTagName('TransactionNumber')[0].value
        console.log(xml)
        console.log(bal)
        console.log(cn)
        
        this.setState({
          balance: bal,
          cardNum:cn
        })
        console.log(xml.getElementsByTagName('Balance')[0].value);
      })
      .catch((err) => {
        console.log('fetch', err)
      })
  }

  render() {    
    const config = { velocityThreshold: 0.3, directionalOffsetThreshold: 80 };
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.firstContainer}>
            <Text style={styles.TransferText}>Transaction from</Text>
          </View>
          <View  >
            <GestureRecognizer
              onSwipe={(direction, state) => this.onSwipe(direction, state)}
              onSwipeLeft={(state) => this.onSwipeLeft(state)}
              onSwipeRight={(state) => this.onSwipeRight(state)}
              config={config} >
              {this.state.myText == 'You swiped left!' ?
                <View style={styles.firstContainre}>
                  <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
                  <View style={styles.zIndexConteaner} >
                    <View style={styles.cardHeder} >
                      <Text style={styles.visnameText}>Visa card</Text>
                      <Text style={styles.cardnumText}>{this.state.cardNum}</Text>
                    </View>
                    <View style={styles.balancContainer}>
                      <Text style={styles.balanceText}>
                        your balance
                   </Text>
                      <Text style={styles.amountText}>
                        $ {this.state.balance}

                      </Text>
                    </View>
                  </View>
                </View>
                :
                <View style={styles.firstContainre}>
                  <Image style={styles.myFirstImage} source={require('../assest/images/masternew.png')} />
                  <View style={styles.zIndexConteaner} >
                    <View style={styles.cardHeder} >
                      <Text style={styles.visnameText}>Master Card Credit</Text>
                      <Text style={styles.cardnumText}>{this.state.cardNum}</Text>
                    </View>
                    <View style={styles.balancContainer}>
                      <Text style={styles.balanceText}>
                        your balance
                    </Text>
                      <Text style={styles.amountText}>
                        $ {this.state.balance}
                      </Text>
                    </View>
                  </View>
                </View>}
            </GestureRecognizer>
          </View>
          <View style={styles.secondContainerInner}>
            <Text style={styles.TransferText}>Transaction to</Text>
          </View>

          <View style={styles.transertocontaeiner}>
            <View style={styles.firstContainre}>
              <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
              <View style={styles.zIndexConteaner} >
                <TouchableOpacity onPress={this._onPressButton}>
                  <View style={styles.cardHeder} >
                    <Text style={styles.visnameText}>American Express</Text>
                    <Text style={styles.cardnumText}>{this.state.cardNum}</Text>
                  </View>
                  <View style={styles.balancContainer}>
                    <Text style={styles.balanceText}>
                      your balance
                    </Text>
                    <Text style={styles.amountText}>
                      $ {this.state.balance}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

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
        </ScrollView>
      </View >


    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  firstContainre: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  myFirstImage: {
    width:"100%",
    // width: (window.width - 60),
    height: 150,
    borderRadius: 20
  },
  zIndexConteaner: {
    position: 'absolute',
    zIndex: 1,
    paddingTop: 5,
    padding: 10
  },
  balancContainer: {
    justifyContent: 'flex-start',
    padding: 10,
    paddingRight: 160
  },

  cardHeder: {
    // paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center'

  },
  cardnumText: {
    fontSize: 15,
    color: 'white'

  },
  visnameText: {
    fontSize: 20,
    color: 'white'

  },
  balanceText: {
    fontSize: 18,
    color: 'white'

  },
  amountText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  activeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'

  },
  activeText: {
    fontSize: 15,
    color: 'white'
  },

  firstContainer: {
    padding: 10,
    paddingLeft: 20,
    paddingTop: 20

  },
  // secondContainerInner: {
  //   padding: 10,
  //   paddingLeft: 20,

  // },
  EnterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: "#731c26",
    borderRadius: 50,
    borderWidth: 0,
    width: (window.width - 30) / 2,
  },
  // firstContainre: {
  //   paddingTop: 20,
  //   height: "20%",
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // transertocontaeiner: {
  //   height: "20%",
  //   justifyContent: 'center',
  //   alignItems: 'center'

  // },
  enterText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },

  firstContainerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40

  },
  TransferText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    paddingBottom: 20
  },

  // firstContainre: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 10
  // },
  // myFirstImage: {
  //   width: (window.width - 20),
  //   height: 105,
  //   borderRadius: 20
  // },
  // zIndexConteaner: {
  //   position: 'absolute',
  //   zIndex: 1,
  //   paddingTop: 10,
  //   padding: 10
  // },
  // balancContainer: {
  //   justifyContent: 'flex-start',
  //   padding: 10,
  //   paddingRight: 160
  // },

  // cardHeder: {
  //   paddingTop: 5,
  //   justifyContent: 'center',
  //   alignItems: 'center'

  // },
  // cardnumText: {
  //   fontSize: 15,
  //   color: 'white'

  // },
  // visnameText: {
  //   fontSize: 20,
  //   color: 'white'

  // },
  // balanceText: {
  //   fontSize: 18,
  //   color: 'white'

  // },
  // amountText: {
  //   fontSize: 20,
  //   color: 'white',
  //   fontWeight: 'bold'
  // }

});
