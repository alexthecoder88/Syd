import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
  Dimensions,
  FlatList,
  Modal
} from "react-native";
import { Header, List } from "react-native-elements";
import { Icon, ListItem } from "native-base";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig
} from "react-native-calendars";
import ServicesScreenStyles from "./ServicesScreenStyles";
import { MenuProvider } from "react-native-popup-menu";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

export default class ServicesScreen extends Component {
  constructor(props) {
    super(props);

    //Services screen styles
    this.styles = new ServicesScreenStyles(this._getScreenDimensions());

    this.data = ["bob", "TEWSt", "TEST", "fgsdfsdfsd", "asd111111"];
    this.data2 = [
      {
        name: "Amy Farha234234",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        description: "Vice President"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "234234Chris Jac23234234son",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chr234234is Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackso234234n",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chr23423is Jacks234234on",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jacksdfsdfsson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chrsdfsdfsdfis Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackssdfsdfson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jacksocvbcvbcvbn",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson123123",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chcvbcvbris Jac123kson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackscbcvbon",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jacxbcxvbkson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chsdfsdfris Jacsdfsdfkson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chr23423is J234234ackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jacks234234234on",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chri123123s Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jack123123son",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chrqweqweis Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jacksoqweqwen",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jacksonweqwe",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jack123123son",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jacks123123on",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jacksonsadas",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris asdasdJackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson1",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson2",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chris Jackson3",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      },
      {
        name: "Chasdasdris Jacksoasdasdn4",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        description: "Vice Chairman"
      }
    ];
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  _createHeader() {
    return (
      <Header
        leftComponent={this._createDrawerOpenerButton()}
        centerComponent={{
          text: "SYD",
          style: { color: "#fff", fontSize: 30, fontWeight: "bold" }
        }}
        backgroundColor="#c1c6e4"
        rightComponent={this._createHeaderMenuOptions()}
      />
    );
  }

  _createHeaderMenuOptions() {
    return (
      <Menu>
        <MenuTrigger customStyles={triggerStyles}>
          {this._createHeaderMenuOptionsLogo()}
        </MenuTrigger>
        <MenuOptions>
          <MenuOption
            onSelect={() => this._sendToServiceRegistrationScreen()}
            text="Add a service"
          />
          <MenuOption
            onSelect={() => alert(`Delete`)}
            text="Delete a service"
          />
        </MenuOptions>
      </Menu>
    );
  }

  _createHeaderMenuOptionsLogo() {
    return <Icon name="md-more" style={{ color: "white" }} />;
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

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          height: 60,
          backgroundColor: "white"
        }}
      >
        <Text>
          title=
          {item.name}
        </Text>
        <Text>
          description=
          {item.description}
        </Text>
      </View>
    );
  };

  _sendToServiceRegistrationScreen() {
    const clientType = { clientType: this.clientType };
    console.log(this.props);
    this.props.navigation.navigate("ServiceRegistrationForm", clientType);
  }

  render() {
    return (
      <MenuProvider>
        <View style={this.styles.getStyles().container}>
          {this._createHeader()}
          <FlatList
            data={this.data2}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </MenuProvider>
    );
  }
}

const triggerStyles = {
  triggerWrapper: {
    width: 30
  }
};
