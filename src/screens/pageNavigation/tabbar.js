import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import PageWeek from './week'
import PageMonth from './month'
import PageAll from './all'

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TouchableHighlight,
//   Image,
//   ScrollView,
//   Dimensions
// } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Body } from "native-base";
// var window = Dimensions.get('window');
// export default class TabNavigatore extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//   }

//   render() {
//     return (
//       <View>
//         <TabNavigatore/>   
  
//       </View >


//     );
//   }
// }

// const styles = StyleSheet.create({

// });




const TabNavigatore=createMaterialTopTabNavigator({
  PageWeek:PageWeek,
  PageMonth:PageMonth,
  PageAll:PageAll,
})
export default createAppContainer(TabNavigatore)