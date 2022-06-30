import { StyleSheet, FlatList, Pressable, Text, View } from 'react-native'
import React,{ useState, useEffect } from 'react'

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d62',
      title: 'Third Item',
    },
  ];


  const renderItem = ({ item }) => <Item title={item.title} />;

  const Item = ({ title }) => (
    <View style={styles.border}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
 

  const Tab = () => {
    return(
      <View style={styles.border}>
      <Text style={styles.text}> Hi its me</Text>
      </View>
    );
  }



  const List = () => { return (
   
  <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    style={styles.FlatList}
  />
  
  );
}

  
  return (
    <View style={styles.container}>
     <Pressable onPress={() => setOpen(!open)}>
      <Tab />
      {open ? <List/> : null}
     </Pressable>
      </View>
   
  )    
}

export default Dropdown

const styles = StyleSheet.create({
 text: {
    color: "white",
    fontSize : 30,
    
 },
 title: {
  color: "white",
 },
 FlatList: {
  
  backgroundColor: "green",
  
  transform: [{ translateY: 5 }]
  
 },
 border: {
  borderWidth: 3,
  borderRadius: 7,
  
  border: 3,
  borderColor: "white",
 },
})