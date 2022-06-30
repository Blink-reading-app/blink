import React from "react";
import { StyleSheet,  Pressable, TextInput, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import Dropdown from "./components/Dropdown";

export default function App() {


  return (
  <View style={styles.container}>
    <View>
    <Dropdown />
    </View>
  </View>
);
  }


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    
    padding: 50,
    backgroundColor: '#0A0A0A',
  },
});