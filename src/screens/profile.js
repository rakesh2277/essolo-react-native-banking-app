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
  TouchableOpacity,
  AsyncStorage

} from 'react-native';
import Modal from "react-native-modal";

var XMLParser = require('react-xml-parser');
import { Container, Header, Content, Card, CardItem, Body } from "native-base";


var window = Dimensions.get('window');

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      pass: '',
      isModalVisible: false,
      firtName: '',
      lastName: ''

    };
  }
  componentDidMount() {
    AsyncStorage.getItem('loginAuth').then((value) => {
      console.log('prifileValue', value)
      // var val = JSON.parse(value)
      // this.setState({
      //   login: val.login,
      //   pass: val.pass
      // })



      // console.log('prifileValue1', JSON.parse(value))
      // if (value == null) {
      //   alert('noData')
      // } else {
      //   console.log('prifileValue2', value)
      // }
    }).done();
    const { navigation, persons } = this.props;
    var mydata = this.props.navigation.state.params
    // console.log('logValuename',mydata)
    var xmlData = new XMLParser().parseFromString(mydata);
    // console.log('xmlData',xmlData )
    var fn = xmlData.getElementsByTagName('FirstName')[0].value
    var ln = xmlData.getElementsByTagName('LastName')[0].value
    // console.log('usernmae', bal)
    this.setState({
      firtName: fn,
      lastName: ln
    })

  }
  dataFind = () => {
    // AsyncStorage.removeItem('loginAuth')
    // alert('remove')
    //     const xmlData = `<?xml version='1.0' encoding='utf-8'?>
    // <Library>
    //    <Books count='1'>
    //        <Book id='1'>
    //            <Name>Me Before You</Name>
    //            <Author>Jojo Moyes</Author>
    //        </Book>
    //    </Books>
    //    <Music count=1>
    //        <CD id='2'>
    //            <Name>Houses of the Holy</Name>
    //            <Artist>Led Zeppelin</Artist>
    //        </CD>
    //    </Music>
    // </Library>`
    //     var xml = new XMLParser().parseFromString(xmlData);    // Assume xmlText contains the example XML
    //     // console.log(xml);
    //     console.log(xml.getElementsByTagName('Name'));
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  render() {
    // console.log(this.state)
    // console.log('basicauth++++++', AsyncStorage.getItem('loginAuth'))



    // var obj= this.props.navigation.state.params.body.body
    // var finalData=JSON.parse(obj) 


    // console.log('data form categorid',navigation.state.params[5].name)
    // console.log('data login',navigation.state)
    return (

      <View style={styles.container} >
        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={this.dataFind}>
            <Image style={styles.profileImage} source={require('../assest/images/profilPic.png')} />
          </TouchableOpacity>
          <View style={styles.fistInner}>
            <Text style={styles.profileNameText}>{this.state.firtName} </Text>
            <Text style={styles.profileNameText}>{this.state.lastName} </Text>
            <Text style={styles.profileBalanceText}>    Balance  </Text>
            <Text style={styles.profilAmountText}>   $ 12,564   </Text>
          </View>

          <View >
            <Image style={styles.addCardImage} source={require('../assest/images/addatmpic.png')} />
          </View>
        </View>

        <View style={styles.secondContainer}>

          <View style={styles.midelInner}>
            <Text style={styles.monthtext} onPress={this.callWeek}>Day</Text>
            <Text style={styles.weektext} onPress={this.callMonth}>Week</Text>
            <Text style={styles.alltext} onPress={this.callAll}>Month</Text>
            <Text style={styles.alltext} onPress={this.callAll}>Year</Text>
          </View>

        </View>

        <View style={styles.thirdContainer}>
          <View style={styles.thirdInner}>
            <Image style={styles.middelImage} source={require('../assest/images/profilper.png')} />
          </View>
        </View>
        <View style={styles.fouthContainer}>
          <View style={styles.fouthInner}>
            <View style={styles.fouthInnerFirst}>
              <Text>Income</Text>
              <Text style={styles.incomeText}>$ 12,65</Text>
            </View>

            <View style={styles.fouthInnerFirst}>
              <Text>Expense</Text>
              <Text style={styles.incomeText}>$ 12,65</Text>
            </View>

          </View>


        </View>
        <View style={styles.fifthContainer}>
          <View style={styles.fifthFirstContainer}>


            <Text style={styles.settingText}>  settings   </Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Image style={styles.plusImage} source={require('../assest/images/pluslogo.png')} />
            </TouchableOpacity>

          </View>

        </View>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ width: 250, height: 120, backgroundColor: '#731c26', borderRadius: 20, bottom: 10, position: 'absolute' }}>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text style={styles.closeModel}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cards')}>
              <Text style={styles.transactionText}>Card Statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Transfer')}>
              <Text style={styles.transactionText}>Transaction</Text>
            </TouchableOpacity>

          </View>
        </Modal>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  firstContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: "20%"

  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 150 / 2,
    // borderWidth: 0,
    // resizeMode: 'contain',
    // width: (window.width - 10) / 2,

  },
  addCardImage: {
    height: 70,
    width: 70,

  },
  middelImage: {
    height: 200,
    width: 200,
    borderRadius: 150 / 2,


  },
  plusImage: {
    height: 40,
    width: 40,

  },
  fistInner: {
    flexDirection: 'column'
  },
  profileNameText: {
    fontSize: 15,
    fontFamily: "italic",
    color: 'black'
  },
  profileBalanceText: {
    fontSize: 15,

  },
  profilAmountText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "italic"

  },

  secondContainer: {
    height: "10%"

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
    fontFamily: "italic",
    color: 'black'
  },
  monthtext: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "italic"
  },
  alltext: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "italic"

  },
  thirdContainer: {
    height: "30%"

  },
  thirdInner: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',

    // justifyContent: 'space-around'

  },
  fouthContainer: {
    height: "20%",
    paddingTop: 70
  },
  fouthInner: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

  },
  fouthInnerFirst: {
    flexDirection: 'column'

  },
  incomeText: {
    fontFamily: "italic",
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'

  },
  fifthContainer: {
    height: "20%",
    paddingTop: 30

  },
  fifthFirstContainer: {
    paddingLeft: 60,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'

  },
  settingText: {
    fontFamily: "italic",
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'

  },
  transactionText: {
    fontSize: 17,
    color: 'white',
    padding: 5,
    paddingLeft: 15

  },
  closeModel: {
    fontSize: 17,
    color: 'white',
    padding: 5,
    paddingLeft: 190

  }




});
