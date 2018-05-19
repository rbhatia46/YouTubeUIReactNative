import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
    } from "react-native";
import Icon from'react-native-vector-icons/MaterialIcons';

class NavBar extends Component{
    render(){
        return (
            <View style={styles.navBar}>
          
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png'}} 
            style={{height:22,width:100}}
            />
  
          <View style={styles.rightNav}>
          <TouchableOpacity><Icon style={styles.navItem} name='videocam' size={25} /></TouchableOpacity>
            <TouchableOpacity><Icon style={styles.navItem} name='search' size={25} /></TouchableOpacity>
            <TouchableOpacity><Icon style={styles.navItem} name='account-circle' size={25} /></TouchableOpacity>
          </View> 
        
  
          </View>
        );
    }
}
export default NavBar;

const styles = StyleSheet.create({
    navBar : {
        height:55,
        backgroundColor : '#f4f4f4',
        elevation:3,
        paddingHorizontal : 15,
        flexDirection:'row',
        alignItems : 'center',
        justifyContent : 'space-between'
      },
      rightNav : {
        flexDirection:'row'
      },
      navItem:{ 
        marginLeft : 25,
      },
});