import { View, Text, Image, SafeAreaView } from "react-native";
import React from 'react'
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
    return (
        <View className="flex-1 relative">
            <StatusBar style="light"/>
            <Image blurRadius={70} source={require('../assets/images/1429581.jpg')}
                className="absolute h-full w-full"
            />
            <SafeAreaView className="flex flex-1">
                /*search section*/
                <View style={{height: '7%'}} className="mx-4 relative z-50"/>
            </SafeAreaView>
            <Image />
        </View>
    )
}