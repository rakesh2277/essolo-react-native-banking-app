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
  Picker
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
var window = Dimensions.get('window');
export default class ChangeStatus extends React.Component {
  static navigationOptions = {
    title: 'Month',
  };
  constructor(props) {
    super(props);
    this.state = {
      cdStatus: ''

    };
  }

  render() {
    return (
      <View style={styles.container}>

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
            <Text style={styles.statusText}>Change Status</Text>
          </View>
        <View style={styles.pickerContainer}>      

          <Picker
            selectedValue={this.state.cdStatus}
            style={styles.pickrStyles}
            itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily: "Ebrima", fontSize: 17 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ cdStatus: itemValue })
            }>
            <Picker.Item label="Active" value="java" />
            <Picker.Item label="New" value="new" />
            <Picker.Item label="New" value="new" />
            <Picker.Item label="New" value="new" />
            <Picker.Item label="New" value="new" />
            <Picker.Item label="New" value="new" />

          </Picker>
        </View>

      </View >


    );
  }
}

const styles = StyleSheet.create({
  firstContainre: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  pickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 20


  },
  pickrStyles: {
    width: (window.width - 80),
    height: 50,
    borderRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
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
  changeStatusContainer:{
    flexDirection: 'row',
    justifyContent: 'center'

  },
  activeText: {
    fontSize: 15,
    color: 'white'
  },
  statusText:{
    fontSize: 20,
    color:'black'
  }

});
