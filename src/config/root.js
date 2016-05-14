import React, { Component } from 'react';
import {View} from 'react-native'
import { Provider } from "react-redux";
import configureStore from "../store/store";
import Base from "../components/base";

let initialState =  {

    motelList:[],
    list:[],
    loading:false
}

const store = configureStore(initialState);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Base />
      </Provider>
    );
  }
}

export default Root;
