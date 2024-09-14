import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from "../../constants/Colors"

export default function _layout() {
  return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.links,
            tabBarActiveBackgroundColor: "#DE5D83",
        }}>
        <Tabs.Screen name="home" options={{
            title: "home page",
            tabBarIcon:({color}) => <Ionicons name="home" size={24} color={color}/>

        }} />
        <Tabs.Screen name="about" options={{
            title:"about page",
            tabBarIcon:({color}) => <Ionicons name="information-circle" size={24} color={color} />
        }}/>
        <Tabs.Screen name="contact" options={{
            title:"contact page",
            tabBarIcon:({color}) => <Ionicons name="globe-outline" size={24} color={color} />
        }
        }/>
        
        </Tabs>
        
        )
  
}