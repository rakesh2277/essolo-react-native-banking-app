import React from 'react';
import { Dimensions, TouchableHighlight, StyleSheet, View, Text, ImageBackground, Image, ScrollView, Clipboard, TouchableOpacity, BackHandler, Modal, FlatList, AsyncStorage, Animated } from "react-native";
import { Container, Header, Title, Icon, Left, Button, Body, CardItem, Card } from 'native-base';


var window = Dimensions.get('window');
var uuid = require('react-native-uuid');
import moment from 'moment'
var XMLParser = require('react-xml-parser');
import axios from 'axios';


export default class MyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: null,
      week: false,
      month: false,
      all: false,
      WeekData: '',
      cardData: ''
    };
  }
  callWeek = () => {

    this.setState({
      week: true,
      month: false,
      all: false,
    })


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
      <SelectCardTransactionsByDates xmlns="http://www.tsbestcardsystems.net/CEMSGS/">
    <cardNumber>286728280961041</cardNumber>
    <startDate>1880-04-04T01:20:00</startDate>
    <endDate>3019-04-08T02:20:00</endDate>
  </SelectCardTransactionsByDates>
   </soap12:Body>
    </soap12:Envelope>`
    axios
      .post('https://tsbestcardsystems.net/CEMSGlobalServices/CEMSGS.asmx', sr, {
        headers: {
          'Content-Type': 'text/xml',
          SOAPAction: 'http://www.tsbestcardsystems.net/CEMSGS/SelectCardTransactionsByDates'
        }
      })
      .then(response => {
        console.log('_______reponseAxios', response.data)
        this.setState({
          cardData: response.data
        })
        var xml = new XMLParser().parseFromString(this.state.cardData);


        console.log(xml)


      })
      .catch((err) => {
        console.log('fetch', err)
      })



  }

  callMonth = () => {
    this.setState({
      month: true,
      all: false,
      week: false,

    })
  }

  callAll = () => {
    this.setState({
      all: true,
      month: false,
      week: false,

    })

  }
  // _onPressButton = () => {

  //   this.props.navigation.navigate('Logout')
  // }
  redirectToChangePin = () => {
    this.props.navigation.navigate('ChangePin')
  }
  redirectToStatus = () => {
    this.props.navigation.navigate('ChangeStatus')

  }
  render() {

    return (
      <View>
        <ScrollView>

          <View style={styles.firstContainre}>
            <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
            <View style={styles.zIndexConteaner} >
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.cardHeder} >
                  <Text style={styles.visnameText}>Visa Classic Credit</Text>
                  <Text style={styles.cardnumText}>4532 **** **** 3242</Text>
                </View>
                <View style={styles.balancContainer}>
                  <Text style={styles.balanceText}>
                    your balance
                    </Text>
                  <Text style={styles.amountText}>
                    $ 21,332.00
                    </Text>
                </View>
                <View style={styles.activeContainer}>
                  <Text style={styles.activeText}>Active</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.changeStatusContainer}>
            <Text style={styles.changeStatusText} onPress={this.redirectToStatus}>
              Change Status
              </Text>
            <Text style={styles.changeStatusText} onPress={this.redirectToChangePin}>
              Change Pin
              </Text>
          </View>




          <View style={styles.middelcontainer}>
            <View style={styles.midelInner}>
              <Text style={styles.weektext} onPress={this.callWeek}>Week</Text>
              <Text style={styles.monthtext} value={this.state.month} onPress={this.callMonth}>Month</Text>
              <Text style={styles.alltext} onPress={this.callAll}>All</Text>
            </View>

            {this.state.month == true ?
              <View>
                <Text>
                  Month
                </Text>
              </View>
              :
              this.state.week == true ?
                <View>
                  <Text>
                    week
              </Text>
                </View>
                : <View style={styles.pageWeekContainer}>
                  <View style={styles.incomeContainer}>
                    <TouchableOpacity onPress={this.transferScreen}>

                      <Text style={styles.incomeTExt}>
                        Income
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.Expensestext}>
                      Expenses
                      </Text>
                  </View>
                  <View style={styles.incomeamountContainer}>
                    <Text style={styles.incomeAmount}>
                      $ 15,0000
               </Text>
                    <Text style={styles.ExpensesAmount}>
                      $,90000
             </Text>
                  </View>
                  <View style={styles.borderline}>
                  </View>

                  <View style={styles.footerConterner}>

                    <Image style={styles.foterImage} source={require('../assest/images/visacard.png')} />

                    <View style={styles.chiliContainer}>
                      <Text style={styles.chiliText}>
                        Chili's
                </Text>
                      <Text style={styles.Restouranttext}>
                        Restourant
                </Text>
                    </View>
                    <View style={styles.chiliAmountContainer}>
                      <Text style={styles.AmountText}>
                        $121
                </Text>
                      <Text style={styles.AmountText}>
                        12 Dec
                </Text>
                    </View>
                  </View>
                  <View style={styles.borderlinefoter}>
                  </View>


                  <View style={styles.footerConterner}>
                    <Image style={styles.foterImage} source={require('../assest/images/visacard.png')} />
                    <View style={styles.chiliContainer}>
                      <Text style={styles.chiliText}>
                        Chili's
                </Text>
                      <Text style={styles.Restouranttext}>
                        Restourant
                </Text>
                    </View>
                    <View style={styles.chiliAmountContainer}>
                      <Text style={styles.AmountText}>
                        $122
                </Text>
                      <Text style={styles.AmountText}>
                        12 Dec
                </Text>
                    </View>
                  </View>
                  <View style={styles.borderlinefoter}>
                  </View>


                  <View style={styles.footerConterner}>
                    <Image style={styles.foterImage} source={require('../assest/images/visacard.png')} />
                    <View style={styles.chiliContainer}>
                      <Text style={styles.chiliText}>
                        Chili's
                </Text>
                      <Text style={styles.Restouranttext}>
                        Restourant
                </Text>
                    </View>
                    <View style={styles.chiliAmountContainer}>
                      <Text style={styles.AmountText}>
                        $123
                </Text>
                      <Text style={styles.AmountText}>
                        12 Dec
                </Text>
                    </View>
                  </View>
                  <View style={styles.borderlinefoter}>
                  </View>

                </View>
            }
            {/* :
                this.state.all == 'all' ?
                  <View>
                    <Text>
                      all
              </Text>
                  </View>
                  : null} */}
            {/*           
           */}
          </View>



        </ScrollView>
      </View >

      // <TouchableHighlight onPress={this._onPressButton}>
      //   <ImageBackground style={styles.imagecontainers}>
      //     <Animated.Image
      //       style={styles.animatedImage}
      //       source={require("../../assest/icons/user.png")}
      //     />
      //     <Text style={styles.imageText}>Profile</Text>
      //   </ImageBackground>
      // </TouchableHighlight>



    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingLeft: 10,
    // paddingRight: 10,
    // justifyContent: 'center',
  },
  firstContainre: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  myFirstImage: {
    width: "100%",
    // width: (window.width - 60),
    height: 180,
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
    paddingTop: 20,
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
  changeStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 10


  },
  changeStatusText: {
    fontSize: 15,
    fontWeight: 'bold'


  },


  // firstContainre: {
  //   height: "30%",
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // myFirstImage: {
  //   overflow: 'hidden',
  //   width: (window.width - 10),
  //   height: 230,
  //   borderRadius: 40
  // },
  // zIndexConteaner: {
  //   position: 'absolute',
  //   zIndex: 1,
  //   paddingTop: 10,
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 10
  // },
  // balancContainer: {
  //   justifyContent: 'flex-start',
  //   padding: 20,
  //   paddingRight: 170
  // },
  // visnameText: {
  //   fontSize: 20,
  //   color: 'white'

  // },
  // cardHeder: {
  //   justifyContent: 'center',

  // },
  // cardnumText: {
  //   fontSize: 15,
  //   color: 'white'

  // },
  // balanceText: {
  //   fontSize: 18,
  //   color: 'white'

  // },
  // amountText: {
  //   fontSize: 25,
  //   color: 'white',
  //   fontWeight: 'bold'
  // },
  middelcontainer: {
    // paddingTop: "20%",
    height: "70%",
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 130
    paddingBottom: 50

  },
  midelInner: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  weektext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  monthtext: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  alltext: {
    fontSize: 20,
    fontWeight: 'bold'

  },
  pageWeekContainer: {
    flexDirection: 'column',
    padding: 30,
    justifyContent: 'flex-start'

  },
  incomeContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 30
    // justifyContent: 'space-around'
  },
  incomeamountContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 30

  },
  incomeAmount: {
    fontSize: 20,

  },
  ExpensesAmount: {
    paddingLeft: 25,
    fontSize: 20,

  },
  chiliText: {
    fontSize: 20,

  },
  Restouranttext: {
    fontSize: 15,


  },
  AmountText: {
    fontSize: 15,
  },
  incomeTExt: {
    fontSize: 20,
  },
  Expensestext: {
    paddingLeft: 45,
    fontSize: 20,

  },
  borderline: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  borderlinefoter: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingTop: 2,

  },
  footerConterner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 2
  },
  foterImage: {
    height: 70,
    width: 60,
    borderRadius: 20


  },
  chiliContainer: {
    flexDirection: 'column'
  },
  chiliAmountContainer: {
    flexDirection: 'column'

  }








});
