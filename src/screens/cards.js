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
var uuid = require('react-native-uuid');
import moment from 'moment'
var XMLParser = require('react-xml-parser');
import axios from 'axios';
export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      cardNum: '',
      status: '',
      cardType: ''

    };
  }
  //   _onPressButton = () => {
  //     alert("asdf")
  //     this.props.navigation.navigate('AddOnShop')
  // }
  // onEntertain = () => {
  //     this.props.navigation.navigate('Entertain')
  // }
  // onfood = () => {
  //     this.props.navigation.navigate('Food')
  // }
  _onPressButton = () => {

    this.props.navigation.navigate('Mycard')
  }
  componentDidMount() {
    // var statsiData = [
    //   '186550962701130',
    //   '283802904473504',
    //   '284660021151381',
    //   '286728280961041',
    //   '249741833013514',
    //   '250897077231522',
    //   '252070954420789',
    //   '253542959150187',
    // ]
    
    
    // console.log('dataPas',parseInt(statsiData))
    
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
        console.log('_______reponseAxios', response.data)
        this.setState({
          cardData: response.data
        })
        var xml = new XMLParser().parseFromString(this.state.cardData);

        var bal = xml.getElementsByTagName('Balance')[0].value
        var cn = xml.getElementsByTagName('TransactionNumber')[0].value

        var st = xml.getElementsByTagName('Status')[0].value
        var ct = xml.getElementsByTagName('CardType')[0].value

        // var pd=cn.push(statsiData)
        // console.log('asdfasdfsd',pd)
       

        console.log(xml)
        // console.log(bal)
        console.log(cn)

        this.setState({
          balance: bal,
          cardNum: cn,
          status: st,
          cardType: ct
        })
      })
      .catch((err) => {
        console.log('fetch', err)
      })
  }

  render() {
    const { balance, cardNum, status, cardType } = this.state
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.firstContainre}>
            <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
            <View style={styles.zIndexConteaner} >
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.cardHeder} >
                  <Text style={styles.visnameText}>{cardType}</Text>
                  <Text style={styles.cardnumText}>{cardNum}</Text>
                </View>
                <View style={styles.balancContainer}>
                  <Text style={styles.balanceText}>
                    Your balance
                    </Text>
                  <Text style={styles.amountText}>
                    ${balance}
                  </Text>
                </View>
                <View style={styles.activeContainer}>
                  <Text style={styles.activeText}>{status}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.firstContainre}>
            <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
            <View style={styles.zIndexConteaner} >
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.cardHeder} >
                  <Text style={styles.visnameText}>Visa Classic Credit</Text>
                  <Text style={styles.cardnumText}>186550962701130</Text>
                </View>
                <View style={styles.balancContainer}>
                  <Text style={styles.balanceText}>
                    Your balance
                    </Text>
                  <Text style={styles.amountText}>
                    ${balance}
                  </Text>
                </View>
                <View style={styles.activeContainer}>
                  <Text style={styles.activeText}>{status}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.firstContainre}>
            <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
            <View style={styles.zIndexConteaner} >
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.cardHeder} >
                  <Text style={styles.visnameText}>Visa Classic Credit</Text>
                  <Text style={styles.cardnumText}>283802904473504</Text>
                </View>
                <View style={styles.balancContainer}>
                  <Text style={styles.balanceText}>
                    Your balance
                    </Text>
                  <Text style={styles.amountText}>
                    ${balance}
                  </Text>
                </View>
                <View style={styles.activeContainer}>
                  <Text style={styles.activeText}>{status}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>




          <View style={styles.firstContainre}>
            <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
            <View style={styles.zIndexConteaner} >
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.cardHeder} >
                  <Text style={styles.visnameText}>Visa Classic Credit</Text>
                  <Text style={styles.cardnumText}> 284660021151381</Text>
                </View>
                <View style={styles.balancContainer}>
                  <Text style={styles.balanceText}>
                    Your balance
                    </Text>
                  <Text style={styles.amountText}>
                    ${balance}
                  </Text>
                </View>
                <View style={styles.activeContainer}>
                  <Text style={styles.activeText}>{status}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>






          <View style={styles.firstContainre}>
            <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
            <View style={styles.zIndexConteaner} >
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.cardHeder} >
                  <Text style={styles.visnameText}>Visa Classic Credit</Text>
                  <Text style={styles.cardnumText}>286728280961041</Text>
                </View>
                <View style={styles.balancContainer}>
                  <Text style={styles.balanceText}>
                    Your balance
                    </Text>
                  <Text style={styles.amountText}>
                    ${balance}
                  </Text>
                </View>
                <View style={styles.activeContainer}>
                  <Text style={styles.activeText}>{status}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.firstContainre}>
            <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
            <View style={styles.zIndexConteaner} >
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.cardHeder} >
                  <Text style={styles.visnameText}>Visa Classic Credit</Text>
                  <Text style={styles.cardnumText}>250897077231522</Text>
                </View>
                <View style={styles.balancContainer}>
                  <Text style={styles.balanceText}>
                    Your balance
                    </Text>
                  <Text style={styles.amountText}>
                    ${balance}
                  </Text>
                </View>
                <View style={styles.activeContainer}>
                  <Text style={styles.activeText}>{status}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>




          <View style={styles.firstContainre}>
            <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
            <View style={styles.zIndexConteaner} >
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.cardHeder} >
                  <Text style={styles.visnameText}>Visa Classic Credit</Text>
                  <Text style={styles.cardnumText}>252070954420789</Text>
                </View>
                <View style={styles.balancContainer}>
                  <Text style={styles.balanceText}>
                    Your balance
                    </Text>
                  <Text style={styles.amountText}>
                    ${balance}
                  </Text>
                </View>
                <View style={styles.activeContainer}>
                  <Text style={styles.activeText}>Active</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.firstContainre}>
            <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
            <View style={styles.zIndexConteaner} >
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.cardHeder} >
                  <Text style={styles.visnameText}>Visa Classic Credit</Text>
                  <Text style={styles.cardnumText}>4532 **** **** 3242</Text>
                </View>
                <View style={styles.balancContainer}>
                  <Text style={styles.balanceText}>
                     Your balance
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
          </View> */}
          {/* <View style={styles.firstContainre}>
            <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
            <View style={styles.zIndexConteaner} >
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.cardHeder} >
                  <Text style={styles.visnameText}>Visa Classic Credit</Text>
                  <Text style={styles.cardnumText}>4532 **** **** 3242</Text>
                </View>
                <View style={styles.balancContainer}>
                  <Text style={styles.balanceText}>
                   Your balance
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
          </View> */}
          {/* <View style={styles.firstContainre}>
            <Image style={styles.myFirstImage} source={require('../assest/images/visanew.png')} />
            <View style={styles.zIndexConteaner} >
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.cardHeder} >
                  <Text style={styles.visnameText}>Visa Classic Credit</Text>
                  <Text style={styles.cardnumText}>4532 **** **** 3242</Text>
                </View>
                <View style={styles.balancContainer}>
                  <Text style={styles.balanceText}>
                     Your balance
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
          </View> */}
        </ScrollView>
      </View >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
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
    // paddingTop: 10,
    // padding: 10
  },
  balancContainer: {
    justifyContent: 'flex-start',
    // padding: 10,
    paddingTop: 40,
    paddingRight: 160
  },

  cardHeder: {
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

  }

});
