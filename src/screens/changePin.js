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
  TextInput
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
var window = Dimensions.get('window');
export default class ChangePin extends React.Component {
  static navigationOptions = {
    title: 'Month',
  };
  constructor(props) {
    super(props);
    this.state = {
      oldPin:'',
      newPin:'',
      confirmPin:''

    };
  }

  render() {
    return (
      <View style={styles.container}>
       <View style={styles.loginContainer}>

       <View style={styles.SectionStyle}>
        <TextInput
          keyboardType='numeric'
          value={this.state.oldPin}
          onChangeText={(oldPin) => this.setState({ oldPin })}
          style={{ flex: 1 }}
          placeholder="old pin"
          underlineColorAndroid="transparent"
          placeholderTextColor={'black'}
          required={true} />
          </View>


        <View style={styles.SectionStyle}>
          <TextInput
            keyboardType='numeric'
            value={this.state.newPin}
            onChangeText={(newPin) => this.setState({ newPin })}
            style={{ flex: 1 }}
            placeholder="new pin"
            underlineColorAndroid="transparent"
            placeholderTextColor={'black'}
            required={true} />
        </View >

        <View style={styles.SectionStyle}>
          <TextInput
          
            keyboardType='numeric'
            value={this.state.confirmPin}
            onChangeText={(confirmPin) => this.setState({ confirmPin })}
            style={{ flex: 1 }}
            placeholder="confirm pin"
            underlineColorAndroid="transparent"
            placeholderTextColor={'black'}
            required={true} />
        </View >
        </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1

  },
  loginContainer: {
    // marginTop:40,
    flex: 1,
    // height: "30%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: "10%",
    // paddingTop: 40,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    width: "70%",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderColor: 'black',
  },

});
