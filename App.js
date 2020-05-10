import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import MainScreen from './src/screens/MainScreen'


const navigator = createStackNavigator({
    Main: {screen:MainScreen, options:{title:'my'}},

},{
    initialRouteName:'Main',
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff'
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf:'center'
      },
})
    
export default App = createAppContainer(navigator)
