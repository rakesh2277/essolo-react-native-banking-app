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
import { Col, Row, Grid } from "react-native-easy-grid";
export default class CardNew extends React.Component {
  static navigationOptions = {
    title: 'All',
  };
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Row >
            <View style={styles.firstContainer}>
              <Image style={styles.image} source={require('../assest/images/visacard.png')} />
            </View>
          </Row>


          <Row >
            <View style={styles.firstContainer}>
              <Image style={styles.image} source={require('../assest/images/visacard.png')} />
            </View>
          </Row>

          <Row >
            <View style={styles.firstContainer}>
              <Image style={styles.image} source={require('../assest/images/visacard.png')} />
            </View>
          </Row>

          <Row >
            <View style={styles.firstContainer}>
              <Image style={styles.image} source={require('../assest/images/visacard.png')} />
            </View>
          </Row>

          <Row >
            <View style={styles.firstContainer}>
              <Text>Hello</Text>
              {/* <Image style={styles.image} source={require('../assest/images/visacard.png')} /> */}
            </View>
          </Row>

        </Grid>


      </View >


    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding:10
  },
  firstContainer: {
    height: 220,
    width: (window.width),
    // paddingLeft:10,
    // paddingRight:10

  },
  image: {
    resizeMode: 'contain',
    // height: 220,
    // width: (window.width),

  }

});
