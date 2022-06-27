import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Pressable, TextInput, Text, View } from 'react-native';
import { useFonts } from 'expo-font';



export default function App() {

// loaded fonts from the assets directory
const [loaded] = useFonts({
  'DMSans-Black': require('./assets/fonts/DMSans-Bold.ttf'),
  'DMSans-Med': require('./assets/fonts/DMSans-Medium.ttf'),
  'DMSans-Regu': require('./assets/fonts/DMSans-Regular.ttf'),
 
});

if (!loaded) {
  return null;
}

//button component
const Button = (props) => {
  return (
    <View>
     <Pressable style={[styles.button]}>
        <Text  style={styles.buttontext}>{props.title}</Text>
       </Pressable>
    </View>
  );
}

  return (
    
    <View style={styles.container}>
    <View style={styles.container1} ></View>
    <View style={styles.container2}>
    <Text style={styles.h1text}>Create an account</Text>
    <Text style={styles.paragraph}>Young people use blink for a seamlesss reading experience</Text>
    </View>
    <View style={styles.container3}>
      <TextInput style={styles.input} 
      placeholder="Email or phone number"
      placeholderTextColor="#FFFFFF90"
      />
      <TextInput style={styles.input}
      placeholder="Password"
      placeholderTextColor="#FFFFFF90"
      ></TextInput>
       <Pressable style={[styles.button, styles.purple]}>
        <Text  style={styles.buttontext}>Sign up</Text>
       </Pressable>
    </View>
    <View style={styles.container4}>
    <Pressable style={[styles.button, styles.purple]}>
        <Text  style={styles.buttontext}>Sign up</Text>
       </Pressable>

    </View>
    <StatusBar style="auto" />
  </View>
  

  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0A0A0A',
    flex: 1,
    padding: 20,
    flexDirection: "column",
  },
    // controls the layout of h1 and paragraph
    container2: {
      width: "100%",
      height: '35%',
      paddingTop: '15%',
      justifyContent: "center",
      
     },
     //controls the google and apple auth buttons
     container4: {
      
      justifyContent: "flex-end",
      backgroundColor: "#FFFFFF20",
      
     },
    
     // controls the icon
     container1: {
      height: '3%',
      justifyContent: "center",
      
     },
     //default buttons styles
     button: {
      backgroundColor: "#FFFFFF60",
      height: 50,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
     },
     //text inside of button
     buttontext: {
      color: "#FFFFFF",
      fontFamily: 'DMSans-Regu',
      fontSize: 18,
     },
     //styling colors
     purple:{
      backgroundColor: "#5A14B4",
     },
     lightblue:{

     },
     //input forms
      input: {
        margin: 0,
       
        height: 50,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#353736",
        borderRadius: 5,
        color: "white",
        fontFamily: 'DMSans-Regu',
        marginTop: 13,
      },
      // controls the input forms
      container3: {
        width: "100%",
        alignItems: 'stretch',
        
       
      },
      h1text: {
        color: "white",
        fontFamily: 'DMSans-Black',
        fontSize: 22,
      },
      paragraph: {
        color: "#FFFFFF60",
        fontFamily: 'DMSans-Regu',
        fontWeight: "normal",
        fontSize: 16,
        marginTop: 3,
       
      },
});
