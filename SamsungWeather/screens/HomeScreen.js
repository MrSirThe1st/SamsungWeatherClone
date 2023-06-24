import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import {MapIcon} from 'react-native-heroicons/solid'

export default function HomeScreen() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1,2,3]);
  const handleLocation = (loc)=>{
    console.log('location: ',loc)
  }
  return (
    <View style={styles.container}>
      <StatusBar style={styles.StatusBar} />
      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        style={styles.backgroundImage}
      />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.statusBar1} />
        <View style={[styles.searchContainer, showSearch? {backgroundColor: `rgba(255, 255, 255, 0.2)`} : {backgroundColor:'transparent'}]}>
          {
            showSearch? (
              <TextInput
              placeholder="Search city"
              placeholderTextColor={"white"}
              style={styles.searchInput}
            />
            ):null
          }
          <TouchableOpacity style={styles.SearchIcon} onPress={()=> toggleSearch(!showSearch)}>
            <MagnifyingGlassIcon size={20} color={"white"}/>
          </TouchableOpacity>
        </View>
        {
          locations.length>0 && showSearch? (
            <View style={styles.Location}>
              {
                locations.map((loc, index)=> {
                  let showBorder = index+1 !== locations.length;
                  let borderClass = showBorder? { borderColor: '#D1D5DB', borderBottomWidth: 2, } : {};
                  return(
                    <TouchableOpacity
                    onPress={()=>handleLocation(loc)}
                    key={index}
                    style={[styles.Location1, borderClass]}
                    >
                      <MapIcon size={20} color={'gray'} padding={3} style={{ marginHorizontal: 10 }}/>
                      <Text style={[styles.Textsearch, { fontSize: 20 }]}>London, United Kingdom</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          ):null
        }
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    width:'100%'
  },
  StatusBar: {
    backgroundColor: "ligth",
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  safeAreaView: {
    flex: 1,
  },
  statusBar1: {
    height: "7%",
    marginRight: 4,
    marginLeft: 4,
    zIndex: 50,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: `rgba(255, 255, 255, 0.2)`,
    marginLeft: 8,
    marginRight: 8,
  },
  searchInput: {
    paddingLeft: 12,
    height: 40,
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  SearchIcon:{
    backgroundColor: `rgba(255, 255, 255, 0.2)`,
    borderRadius: 10,
    padding: 12,
    margin: 8,
  },
  Location:{
    flexDirection:'column',
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 20,
  },
  Location1:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical: 10,
    marginHorizontal: 4,
    marginRight: 8,
    borderStyle: 'solid',
  },
  Textsearch:{
    color: "black",
  }
});
