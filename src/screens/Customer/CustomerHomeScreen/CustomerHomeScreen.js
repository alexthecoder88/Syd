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
import CustomerHomeScreenStyles from "./CustomerHomeScreenStyles";
import { Header, List } from "react-native-elements";
import { Icon } from "native-base";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig
} from "react-native-calendars";
import CustomerHeader from "../../../components/CustomComponents/CustomerHeader/CustomerHeader";
import Image from "react-native-scalable-image";

export default class CustomerHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../../../../assets/calendar-icon-32.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  constructor(props) {
    super(props);
    this.styles = new CustomerHomeScreenStyles(this._getScreenDimensions());
    this.nearSalonsList = [
      {
        name: "Salon super salon",
        tel: "514-989-1333",
        adr: "1000 boulevard St-Michel ",
        city: "Montreal ",
        img: "../../../../assets/client-generic-img1.jpg"
      },
      {
        name: "Salon La vie",
        tel: "514-999-3333",
        adr: "450 rosemont #2",
        city: "Montreal ",
        img: "../../../../assets/client-generic-img2.jpg"
      },
      {
        name: "Salon manucure francaise",
        tel: "514-999-3333",
        adr: "9311 1e ave ",
        city: "Montreal ",
        img: "../../../../assets/client-generic-img4.jpg"
      },
      {
        name: "Salon manucure antillaise",
        tel: "514-221-1111",
        adr: "100 6e ave ",
        city: "Laval ",
        img: "../../../../assets/client-generic-img3.jpg"
      }
    ];
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  _createTitle = () => {
    const titleStyles = this.styles.getStyles().titleContainer;
    return <Text style={titleStyles}>Nails salons near you</Text>;
  };

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item }) => {
    const name = item.name;
    return (
      <TouchableHighlight
        onPress={() => this._sendToAvailableServicesScreen()}
        underlayColor={{ color: "grey" }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginBottom: 40,
            backgroundColor: "white",
            padding: 12
          }}
        >
          <Image
            source={
              item.name == "Salon super salon"
                ? require("../../../../assets/client-generic-img1.jpg")
                : item.name == "Salon La vie"
                  ? require("../../../../assets/client-generic-img2.jpg")
                  : item.name == "Salon manucure francaise"
                    ? require("../../../../assets/client-generic-img3.jpg")
                    : require("../../../../assets/client-generic-img4.jpg")
            }
            width={Dimensions.get("window").width}
          />
          <Text style={{ color: "grey", fontSize: 22, fontWeight: "bold" }}>
            {item.name}
          </Text>
          <Text style={{ color: "grey", fontSize: 22, fontWeight: "bold" }}>
            {item.tel}
          </Text>
          <Text style={{ color: "grey", fontSize: 22, fontWeight: "bold" }}>
            {item.adr}
          </Text>
          <Text style={{ color: "grey", fontSize: 22, fontWeight: "bold" }}>
            {item.city}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  _renderNearSalonsFlatList() {
    return (
      <FlatList
        data={this.nearSalonsList}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    );
  }

  _sendToAvailableServicesScreen = () => {
    this.props.navigation.navigate("AvailableServicesScreen");
  };

  render() {
    return (
      <View style={this.styles.getStyles().container}>
        <CustomerHeader />
        {this._createTitle()}
        {this._renderNearSalonsFlatList()}
      </View>
    );
  }
}
