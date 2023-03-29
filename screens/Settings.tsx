import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import { ListItem } from '../components/ListItem'
import { theme } from '../theme'

export const Settings = () => {
  return (
    <View style={styles.container}>
      <ListItem 
        label='Categories'
        detail={<Entypo name="chevron-thin-right" color="white" style={{opacity: 0.3}} size={20}/>}  
        onClick={() => {}}/>
         <ListItem 
        label='Erase all data'
        isDestructive
        onClick={() => {}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 11,
  }
})