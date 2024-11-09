import { StyleSheet, Text, View , LogBox, YellowBox } from 'react-native'
import React from 'react'
import Card from '@/components/Card'

const _layout = () => {
  return (
    <View style={styles.screen}>

      <View style={styles.card}>
      <View style = {styles.LogBox}></View>
      <View>
      <Text style={styles.name}> name:thaeer taieh </Text>
      <Text style={styles.txt2}> B.D:10/10/87 </Text>
      <Text style={styles.txt}> my first ui </Text>
      </View>
      
      </View>
      <Card name = 'thaer' year='1987' point='99'/>
    </View>

  )
  
}

export default _layout

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
   
    
    

   
  },
  txt:{
    fontSize:40,
    // marginTop:60,
    paddingTop:10,
    alignItems:"center",
    justifyContent:"center",



  
  },
  name:{
    fontSize:30,
   
  },
  txt2:{
    fontSize:30,



  },
  card:{
    borderWidth:1,
    height:300,
    width:350,
    padding:30,
    flexDirection:'row',
    borderColor:'green',

  },
  LogBox:{


height:70,
width:70,
backgroundColor:'#CDB4DB'
  },
  
  

})
