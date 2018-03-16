import React, {Component} from 'react'
import { StackNavigator } from 'react-navigation'

import Products from './screens/Products'
import ProductsDetail from './screens/ProductsDetail'

const RootStack = StackNavigator({
  Products: {
    screen: Products,
    navigationOptions: {
      title: "Home",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  ProductsDetail: {
    screen: ProductsDetail
  },
})

export default class App extends Component {
  render(){
    return (
      <RootStack/>
    )
  }
}
