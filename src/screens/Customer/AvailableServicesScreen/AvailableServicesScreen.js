import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Dimensions,
  FlatList
} from "react-native";
import AvailableServicesScreenStyles from "./AvailableServicesScreenStyles";
import { Header } from "react-native-elements";
import { Icon } from "native-base";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig
} from "react-native-calendars";
import CustomerHeader from "../../../components/CustomComponents/CustomerHeader/CustomerHeader";
import Image from "react-native-scalable-image";

export default class AvailableServicesScreen extends Component {
  constructor(props) {
    super(props);
    this.styles = new AvailableServicesScreenStyles(
      this._getScreenDimensions()
    );
    this.availableServices = [
      {
        name: "Super traitement !!",
        description:
          "Pédicure de base et recouvrement vernis gel couleur Choix de plus de 300 couleurs! (70min)",
        price: "400$"
      },
      {
        name: "COMBOS VERNIS",
        description:
          "Pédicure de base et recouvrement vernis gel manucure française (1h30)",
        price: "75$"
      },
      {
        name: "PEDICURES VERNIS",
        description: "Manucure et recouvrement vernis gel manucure française",
        price: "30$"
      },
      {
        name: "MANUCURES VERNIS",
        description:
          "Champs Élysées Pose d’ongles au gel dur avec prothèses (1h45)",
        price: "100$"
      },
      {
        name: "NAIL ART",
        description: "Application / changement de vernis (mains ou pieds)",
        price: "45$"
      }
    ];
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  _createHeader() {
    return (
      <Header
        leftComponent={this._backToCustomerHomeScreen()}
        centerComponent={{
          text: "SydNails",
          style: {
            color: "#fff",
            fontSize: 30,
            fontWeight: "bold",
            borderBottomWidth: 0
          }
        }}
        backgroundColor="#c1c6e4"
        outerContainerStyles={{ borderBottomWidth: 0 }}
      />
    );
  }

  _backToCustomerHomeScreen() {
    return (
      <Icon
        name="md-arrow-back"
        style={{ color: "white" }}
        onPress={() => this._sendToCustomerHomeScreen()}
      />
    );
  }

  _sendToCustomerHomeScreen = () => {
    this.props.navigation.navigate("CustomerHomeScreen");
  };

  _renderSalonImage = () => {
    return (
      <Image
        source={require("../../../../assets/client-generic-img1.jpg")}
        width={this._getScreenDimensions().width}
        style={{ marginBottom: 15 }}
      />
    );
  };

  _createTitle = () => {
    const titleStyles = this.styles.getStyles().titleContainer;
    return <Text style={titleStyles}>Our services</Text>;
  };

  _renderNearSalonsFlatList() {
    return (
      <FlatList
        data={this.availableServices}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    );
  }

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item }) => {
    const serviceStyles = this.styles.getStyles().service;
    const serviceNameStyles = this.styles.getStyles().serviceName;
    return (
      <TouchableHighlight
        style={{ backgroundColor: "white", marginBottom: 15 }}
        onPress={() => this._sendToAppointmentsScreen(item)}
        underlayColor="grey"
      >
        <View style={{ marginBottom: 10, padding: 13 }}>
          <Text style={serviceNameStyles}>{item.name}</Text>
          <Text style={serviceStyles}>{item.description}</Text>
          <Text style={serviceStyles}>{item.price}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  _sendToAppointmentsScreen(item) {
    this.props.navigation.navigate("AppointmentsScreen", item);
  }
  render() {
    return (
      <View style={this.styles.getStyles().container}>
        {this._createHeader()}
        {this._renderSalonImage()}
        {this._renderNearSalonsFlatList()}
      </View>
    );
  }
}
