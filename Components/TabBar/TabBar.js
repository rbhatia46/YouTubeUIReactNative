import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
    } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

class TabBar extends Component{
    render(){
        return (
            <View style={styles.tabBar}>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Icon name="home" size={25}  color="red"/>
          <Text style={styles.tabTitle,{color:'red',fontSize:10}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Icon name="whatshot" size={25} />
          <Text style={styles.tabTitle}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Icon name="subscriptions" size={25} />
          <Text style={styles.tabTitle}>Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Icon name="notifications" size={25} />
          <Text style={styles.tabTitle}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Icon name="folder" size={25} />
          <Text style={styles.tabTitle}>Library</Text>
        </TouchableOpacity>
    </View>
    );
    }
}
export default TabBar;

const styles = StyleSheet.create({
    tabBar : {
        backgroundColor : '#fff',
        height : 53,
        borderTopWidth : 0.5,
        borderColor : '#f6f6f6',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems:'center'
      },
      tabItem : {
        alignItems : 'center',
        justifyContent : 'center',
      }, 
      tabTitle : {
        fontSize : 10,
        color:'#3c3c3c',
      }
});