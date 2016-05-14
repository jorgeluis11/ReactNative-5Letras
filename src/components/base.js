import React, { Component } from 'react';
// import Main from "../containers/Main";
// import NavigationBar from "./navigation-bar";
import {View, Text} from 'react-native';
import {Container, Header, Content, Footer, Title} from 'native-base';

class Base extends Component {
  render() {
    return (
      <Container>
               <Header>
                   <Title>Header</Title>
               </Header>

               <Content>
                   <Text> text </Text>
               </Content>

               <Footer>
                   <Title>Footer</Title>
               </Footer>
           </Container>
    );
  }
}


export default Base;
