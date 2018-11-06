import React, { Component } from 'react';
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
} from 'react-native';
import BusinessHomeScreenStyles from './BusinessHomeScreenStyles';
import { Header } from 'react-native-elements';
import { Icon } from 'native-base';
import { Calendar, CalendarList, Agenda , LocaleConfig } from 'react-native-calendars';

export default class BusinessHomeScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../../../assets/calendar-icon-32.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.businessHomeScreenStyles = new BusinessHomeScreenStyles(this._getScreenDimensions());
    this.state = {
      items: {
       '2018-10-22': [{text: 'item 1 - any js object',name:"This is a fucking test!!!!!!"}],
       '2018-10-23': [{text: 'item 2 - any js object'}],
       '2018-10-24': [],
       '2018-10-25': [{text: 'item 3 - any js object'}],
      }
    };
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions  = () => Dimensions.get('window');

  _createHeader(){
    return(
      <Header     
        leftComponent={this._createDrawerOpenerButton()}
        centerComponent={{ text: 'SYD', style: { color: '#fff' , fontSize:30 , fontWeight:'bold' }}}
        backgroundColor="#c1c6e4"  />    
    )
  }

  _createDrawerOpenerButton(){
    return (
      <Icon name="menu"
        style={{color: 'white' }}
        onPress={() => this.props.navigation.openDrawer()} />
    )
  }


  loadItems(day) {
    setTimeout(() => {
      console.log("items loading for day ===> "+ day);
     
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {

            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }


  renderItem(item) {
    //debugger;
    return (
      <View style={[styles.item, { backgroundColor:'green'}]}><Text>{item.name}</Text></View>
      //<View style={{backgroundColor:'green',height:item.height}}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }


  render() {
    return (
      <View style={this.businessHomeScreenStyles.getStyles().container}>
        {this._createHeader()}
      
          <Agenda
            items={this.state.items}
            loadItemsForMonth={this.loadItems.bind(this)}
            selected={'2018-10-20'}

            //The main rendering of items done here
            renderItem={this.renderItem.bind(this)}

            hideKnob={false}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            onDayChange={(day)=>{console.log('day changed')}}
            markingType={'period'}
            onDayPress={(day)=>{console.log('day pressed!!!!')}}
            markedDates={{
            //    '2017-05-08': {textColor: '#666'},
            //    '2017-05-09': {textColor: '#666'},
            //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
            //    '2017-05-21': {startingDay: true, color: 'blue'},
                '2018-10-22': {endingDay: true, color: 'red'},
                '2018-10-22': {endingDay: true, color: 'red'},
                '2018-10-24': {startingDay: true, color: 'red'},
                '2018-10-25': {color: 'red'},
                '2018-10-26': {endingDay: true, color: 'red'}}}
              monthFormat={'yyyy'}
              theme={{calendarBackground: 'white', agendaKnobColor: 'green'}}
            //renderDay={(day, item) => (<Text>{day ? day.day: 'item TESTING!!!!'}</Text>)}
           // renderDay={(day,item)=>this.renderDay(day,item)}
          />
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});