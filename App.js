import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


import TabBar from './Components/TabBar/TabBar';
import NavBar from './Components/NavBar/NavBar';
import VideoItem from './Components/VideoItem/VideoItem';
import data from './assets/data.json';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
      <View style={styles.body}>
        <FlatList
          data = {data.items}
          renderItem = {(video)=> <VideoItem video={video.item} />}
          keyExtractor = {(item)=>item.id}
          ItemSeparatorComponent = {()=><View style={{height:0.5,backgroundColor:'#ccc'}} />}
        />
      </View>
        <TabBar />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  body : {
    flex:1
  },
  
});
