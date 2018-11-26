import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  Dimensions
} from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "native-base";

export default class HistoryScreen extends Component {
  static navigationOptions = {
    drawerLabel: "History",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../../../../assets/history-icon-32.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  _createHeader() {
    return (
      <Header
        leftComponent={this._createDrawerOpenerButton()}
        centerComponent={{
          text: "SYD",
          style: { color: "#fff", fontSize: 30, fontWeight: "bold" }
        }}
        backgroundColor="#c1c6e4"
      />
    );
  }

  _createDrawerOpenerButton() {
    return (
      <Icon
        name="menu"
        style={{ color: "white" }}
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._createHeader()}
        <Image
          source={require("../../../../assets/under-construction.png")}
          style={{
            flex: 1,
            height: 540,
            width: 350,
            resizeMode: "contain",
            alignSelf: "center"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
