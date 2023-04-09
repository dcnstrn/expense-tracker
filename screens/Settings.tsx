import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import { ListItem } from '../components/ListItem'
import { theme } from '../theme'

export const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ListItem 
        label='Categories'
        detail={<Entypo name="chevron-thin-right" color="white" style={{opacity: 0.3}} size={20}/>}  
        onClick={() => {
          navigation.navigate('Categories')
        }}/>
         <ListItem 
        label='Erase all data'
        isDestructive
        onClick={() => {
          Alert.alert(
            'Are you sure?',
            'This action cannot be undone',
            [
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
              },
              {
                text: 'Erase data',
                style: 'destructive',
                onPress: () => {
                  
                },
              },
            ],
            {
              
              userInterfaceStyle: 'dark',
            }
          );
        }}
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