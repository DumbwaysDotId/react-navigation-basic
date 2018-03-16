import React, {Component} from 'react'
import {
  Container, Content, Text, Button,
  List, ListItem, Icon, Right, Body
} from 'native-base'

export default class Products extends Component{

  state = {
    products: [
      {id: 1, name: "Product 1"},
      {id: 2, name: "Product 2"},
    ]
  }

  handleAddProduct(){
    let products = this.state.products
    products.push({id: 3, name: "Product 3"})

    this.setState({
      products
    })
  }

  render(){
    return (
      <Container>
        <Content>
          <List>
            {this.state.products.map((product)=> (
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
          <Button onPress={()=> this.handleAddProduct()}>
            <Text>Add Product</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
