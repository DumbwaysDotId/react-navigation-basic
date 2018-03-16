import React, {Component} from 'react'
import {Container, Content, Text} from 'native-base'

export default class ProductsDetail extends Component{

  render(){
      const { params } = this.props.navigation.state
      const { id, name } = params.product

      return (
        <Container>
          <Content>
            <Text>
              ID Produk: {id}
            </Text>
            <Text>
              Nama Produk: {name}
            </Text>
          </Content>
        </Container>
      )
  }

}
