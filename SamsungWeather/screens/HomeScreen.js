import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {CalendarDaysIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
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
        <View style={styles.ForecastSection}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 32 }}>
            London
            <Text style={{ color: '#D1D5DB', textAlign: 'center', fontWeight: 'semibold', fontSize: 20 }}>,United Kingdom</Text>
          </Text>
          <View style={{ flexDirection: 'row', justifyContent:'center',}}>
            <Image style={{width: 100, height:100}}
              source={require('../assets/images/partlycloudy.png')}
            />
          </View>
          <View style={{marginVertical: 8}}>
            <Text style={{textAlign:'center', 
            fontWeight: 'bold', 
            color: 'white',
            fontSize: 40,
            marginLeft:8
            }}>
              23&#176;
            </Text>
            <Text style={{textAlign:'center',  
            color: 'white',
            fontSize: 25,
            letterSpacing:2,
            marginLeft:8}}>partly cloudy
            </Text>
            <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10,}}>
              <View style={{flexDirection:'row',marginHorizontal:10, alignItems:'center', marginTop:40,}}>
                <Image
                  source={require('../assets/icons/wind.png')}
                  style={{height:20, width:20,marginHorizontal:10}}
                />
                <Text style={{color:'white', fontWeight:'800'}}>22km</Text>
              </View>
              <View style={{flexDirection:'row',marginHorizontal:10, alignItems:'center', marginTop:40,}}>
                <Image
                  source={require('../assets/icons/drop.png')}
                  style={{height:20, width:20,marginHorizontal:10}}
                />
                <Text style={{color:'white', fontWeight:'800'}}>34%</Text>
              </View>
              <View style={{flexDirection:'row',marginHorizontal:10, alignItems:'center', marginTop:40,marginHorizontal:20}}>
                <Image
                  source={require('../assets/icons/sun.png')}
                  style={{height:20, width:20,marginHorizontal:10}}
                />
                <Text style={{color:'white', fontWeight:'800'}}>6:05 AM</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginBottom:25,}}>
            <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:10,}}>
              <CalendarDaysIcon size={44} color={'white'}/>
              <Text style={{color:'white',fontSize: 16,fontWeight: 'bold',}}>Daily forecast</Text>
            </View>
            <ScrollView horizontal contentContainerStyle={{paddingHorizontal:15}}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{justifyContent:'center', 
              alignItems:'center', 
              display:'flex', 
              width:78, borderRadius:10, 
              paddingVertical:10, marginRight:10, backgroundColor:'rgba(255, 255, 255, 0.5)', marginTop:10}}
              >
                <Image source={require('../assets/images/heavyrain.png')}
                  style={{height:30, width:30}}
                />
                <Text style={{color:'white'}}>Monday</Text>
                <Text style={{color:'white', fontWeight:'800', fontSize:24}}>17&#176;</Text>
              </View>
              <View style={{justifyContent:'center', 
              alignItems:'center', 
              display:'flex', 
              width:78, borderRadius:10, 
              paddingVertical:10, marginRight:10, backgroundColor:'rgba(255, 255, 255, 0.5)', marginTop:10}}
              >
                <Image source={require('../assets/images/heavyrain.png')}
                  style={{height:30, width:30}}
                />
                <Text style={{color:'white'}}>Tuesday</Text>
                <Text style={{color:'white', fontWeight:'800', fontSize:24}}>17&#176;</Text>
              </View>
              <View style={{justifyContent:'center', 
              alignItems:'center', 
              display:'flex', 
              width:78, borderRadius:10, 
              paddingVertical:10, marginRight:10, backgroundColor:'rgba(255, 255, 255, 0.5)', marginTop:10}}
              >
                <Image source={require('../assets/images/heavyrain.png')}
                  style={{height:30, width:30}}
                />
                <Text style={{color:'white'}}>Wednesday</Text>
                <Text style={{color:'white', fontWeight:'800', fontSize:24}}>17&#176;</Text>
              </View>
              <View style={{justifyContent:'center', 
              alignItems:'center', 
              display:'flex', 
              width:78, borderRadius:10, 
              paddingVertical:10, marginRight:10, backgroundColor:'rgba(255, 255, 255, 0.5)', marginTop:10}}
              >
                <Image source={require('../assets/images/heavyrain.png')}
                  style={{height:30, width:30}}
                />
                <Text style={{color:'white'}}>Thursday</Text>
                <Text style={{color:'white', fontWeight:'800', fontSize:24}}>17&#176;</Text>
              </View>
              <View style={{justifyContent:'center', 
              alignItems:'center', 
              display:'flex', 
              width:78, borderRadius:10, 
              paddingVertical:10, marginRight:10, backgroundColor:'rgba(255, 255, 255, 0.5)', marginTop:10}}
              >
                <Image source={require('../assets/images/heavyrain.png')}
                  style={{height:30, width:30}}
                />
                <Text style={{color:'white'}}>Friday</Text>
                <Text style={{color:'white', fontWeight:'800', fontSize:24}}>17&#176;</Text>
              </View>
              <View style={{justifyContent:'center', 
              alignItems:'center', 
              display:'flex', 
              width:78, borderRadius:10, 
              paddingVertical:10, marginRight:10, backgroundColor:'rgba(255, 255, 255, 0.5)', marginTop:10}}
              >
                <Image source={require('../assets/images/heavyrain.png')}
                  style={{height:30, width:30}}
                />
                <Text style={{color:'white'}}>Saturday</Text>
                <Text style={{color:'white', fontWeight:'800', fontSize:24}}>17&#176;</Text>
              </View>
              <View style={{justifyContent:'center', 
              alignItems:'center', 
              display:'flex', 
              width:78, borderRadius:10, 
              paddingVertical:10, marginRight:10, backgroundColor:'rgba(255, 255, 255, 0.5)', marginTop:10}}
              >
                <Image source={require('../assets/images/heavyrain.png')}
                  style={{height:30, width:30}}
                />
                <Text style={{color:'white'}}>Sunday</Text>
                <Text style={{color:'white', fontWeight:'800', fontSize:24}}>17&#176;</Text>
              </View>
            </ScrollView>
        </View>
      </SafeAreaView>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    width:'100%',
    backgroundColor:'#3a4c40'
  },
  StatusBar: {
    backgroundColor: "ligth",
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
  },
  ForecastSection:{
    flex: 1,
    marginHorizontal: 4,
    flexDirection: 'column',
    justifyContent:'space-evenly',
    marginBottom: 4
  },
});
