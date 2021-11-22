import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class SpaceCraft extends React.Component {
  render(){ 
    return (
      
   <View style={styles.container}>
    <Text>
     Hey......This is the SpaceCraft Screen!
    </Text>
   </View>
      
    );
  }
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   alignItems:'center',
   justifyContent:'center'
 }
});