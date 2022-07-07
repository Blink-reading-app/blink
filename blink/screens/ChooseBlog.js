import { StyleSheet, Text, View, TextInput, FlatList, Dimensions, SafeAreaView, StatusBar, } from 'react-native'
import React, {Component} from 'react'
import { useFonts } from 'expo-font';



const datalist =[{key: 1},{key: 2},{key: 3}, {key: 4}, {key: 5}, {key: 6},]


const numColumns = 3
const WIDTH = Dimensions.get('window').width


const Input =(props) => {
    return(
      <View>
  <TextInput style={props.style} 
        placeholder={props.placeholder}
        placeholderTextColor={props.textColor}
        />
     </View>
  );}


const ChooseBlog = () => {

    const [loaded] = useFonts({
        'DMSans-Black': require('./assets/fonts/DMSans-Bold.ttf'),
        'DMSans-Med': require('./assets/fonts/DMSans-Medium.ttf'),
        'DMSans-Regu': require('./assets/fonts/DMSans-Regular.ttf'),
       
      });
      
      if (!loaded) {
        return null;
      }

    const renderitems =({item, index})=> {
        return(
        <View style={styles.itemStlyle}>
            <Text style={styles.itemText}>{item.key}</Text>
        </View>
        )
    }

    

  return (

    <View style={styles.container}>
        <Text style={{color: 'white',fontFamily: 'DMSans-Black',
         fontSize: 25, marginRight: 50, marginVertical: 20,}}>Choose 3 or more blogs you like</Text>
        <Input style={styles.input}/>
      <FlatList
       data={datalist}
       renderItem={renderitems}
       numColumns={numColumns}
       keyExtractor={(item, index) => index.toString()}
      />
    </View>
    
  )
}

export default ChooseBlog

const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingTop: StatusBar.currentHeight,
  paddingHorizontal: 9,
  backgroundColor: '#0A0A0A',
 },
 itemStlyle: {
 backgroundColor: '#ffffff',
 alignItems: 'center',
 justifyContent: 'center',
 flex: 1,
 marginHorizontal: 5,
 height: WIDTH / numColumns,
 borderRadius: 5,
 marginVertical: 5,
 },
 itemText: {
  fontSize: 40,
  color: '#000000',
 },
 input: {
    margin: 0,
    marginVertical: 20,
    height: 50,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#353736",
    borderRadius: 5,
    color: "white",
    fontFamily: 'DMSans-Regu',
    marginTop: 0,
  },
})