import React, { Component } from "react";
import { Header } from "react-native-elements";

const customerHeader = () => (
  <Header
    centerComponent={{
      text: "SydNails",
      style: { color: "#fff", fontSize: 30, fontWeight: "bold" }
    }}
    backgroundColor="#c1c6e4"
  />
);

export default customerHeader;
