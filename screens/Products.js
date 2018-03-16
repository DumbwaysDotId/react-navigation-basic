import React, {Component} from 'react'
import {
  Container, Content, Text, Button,
  List, ListItem, Icon, Right, Body
} from 'native-base'

export default class Products extends Component{

  //fetch db, SELECT * FROM products
  products = [
    {id: 1, name: "Product 1"},
    {id: 2, name: "Product 2"},
  ]

  render(){
    return (
      <Container>
        <Content>
          <List>
            {this.products.map((product)=> (
              <ListItem
                key={product.id}
                onPress={()=>{
                  this.props.navigation.navigate(
                    'ProductsDetail', {
                    product
                  })
                }}
              >
                <Body>
                  <Text>{product.id}. {product.name}</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward"/>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
  }
}
