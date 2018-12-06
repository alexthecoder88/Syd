import React, { Component } from "react";
import { Header } from "react-native-elements";
import { Icon } from "native-base";
const customerHeader = props => (
  <Header
    centerComponent={{
      text: "SydNails",
      style: { color: "#fff", fontSize: 30, fontWeight: "bold" }
    }}
    backgroundColor="#c1c6e4"
    leftComponent={props.backToCustomerHomeScreen}
  />
);

export default customerHeader;
