
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Splash from './src/screens/splash';
import Login from './src/screens/login';
import Logout from './src/screens/logout';
import Dashboard from './src/screens/dashboard';
import Forget from './src/screens/forget';
import Cards from './src/screens/cards';
import Mycard from './src/screens/mycard'
import CardNew from './src/screens/cardNew'
import Transfer from './src/screens/transfer'
import CardToCard from './src/screens/cardToCard'
import CardToCardAtm from './src/screens/cardTocardAtm'
import CardToCardFinal from './src/screens/cardTocardSubmit'
import MyProfile from './src/screens/profile'
import ChangePin from './src/screens/changePin'
import ChangeStatus from './src/screens/changeStatus'



// import TabNavigatore from './src/screens/pageNavigation/tabbar'



const RootStack = createStackNavigator({

  Splash: {
    screen: Splash,
    navigationOptions: {
      title: '',
      header: null
    }
  },


  Login: {
    screen: Login,
    navigationOptions: {
      title: '',
      header: null
    }
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      title: '',
      header: null
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: '',
      header: null
    }
  },
  Forget: {
    screen: Forget,
    navigationOptions: {
      title: 'Forgot password',
      // header: null
    }
  },

  Cards: {
    screen: Cards,
    navigationOptions: {
      title: 'Cards',
      // header: null
    }
  },
  CardNew: {
    screen: CardNew,
    navigationOptions: {
      title: 'My Card',
      // header: null
    }
  },


  Mycard: {
    screen: Mycard,
    navigationOptions: {
      title: 'My Card',
      // header: null
    }
  }, 
  Transfer: {
    screen: Transfer,
    navigationOptions: {
      title: 'Transfer',
      // header: null
    }
  }, 
  CardToCard: {
    screen: CardToCard,
    navigationOptions: {
      title: 'card to card',
      // header: null
    }
  }, 
  CardToCardAtm: {
    screen: CardToCardAtm,
    navigationOptions: {
      title: 'card to card',
      // header: null
    }
  }, 
  CardToCardFinal: {
    screen: CardToCardFinal,
    navigationOptions: {
      title: 'card to card',
      // header: null
    }
  }, 

  MyProfile: {
    screen: MyProfile,
    navigationOptions: {
      title: 'Profile',
      // header: null
    }
  },



  ChangePin: {
    screen: ChangePin,
    navigationOptions: {
      title: 'Change Pin',
      // header: null
    }
  },


  ChangeStatus: {
    screen: ChangeStatus,
    navigationOptions: {
      title: 'Change Status',
      // header: null
    }
  },

  
   
  
  

  
  



},
);
export default createAppContainer(RootStack);



