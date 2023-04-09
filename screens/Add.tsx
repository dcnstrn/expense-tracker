import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import { ListItem } from '../components/ListItem'
import { TextInput } from 'react-native-gesture-handler'
import { theme } from '../theme'
import { Recurrence } from '../types/recurrence'

export const Add = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [sheetView, setSheetView] = React.useState<'recurrence' | 'category'>(
    'recurrence'
  );
  const [date, setDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState('')
  const [note, setNote] = React.useState('');
  const [category, setCategory] = React.useState({color: 'red', name: 'Clothes'})
  const [recurrence, setRecurrence] = React.useState<Recurrence>(Recurrence.None)
  return (
    <>
      <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={112}
        style={{ margin: 16, flex: 1}}
      >
        <View style={{
          
          borderRadius: 11,
          overflow: 'hidden',
        }}>
          <ListItem  label='Amount'
        detail={
          <TextInput
          placeholder='Amount'
          placeholderTextColor={'gray'}
          onChange={(event) => {setAmount(event.nativeEvent.text)}}
          value={amount}
          textAlign='right'
          style={{
            color: 'white',
            flex: 1,
            borderRadius: 8,
            paddingLeft: 8,
           
          }}
        /> 
        } 
         />

      <ListItem
            label='Recurrence'
            detail={
              <TouchableOpacity
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}
                onPress={() => {
                  setSheetView('recurrence');
                  sheetRef.current?.snapToIndex(1);
                }}
              >
                <Text
                  style={{
                    color: theme.colors.primary,
                    textTransform: 'capitalize',
                    fontSize: 16,
                  }}
                >
                  {recurrence}
                </Text>
              </TouchableOpacity>
            }
          />

      <ListItem
            label='Date'
            detail={
              Platform.OS === 'ios' && (
                <DateTimePicker
                  value={date}
                  mode={'date'}
                  is24Hour={true}
                  themeVariant='dark'
                  maximumDate={new Date()}
                  minimumDate={
                    new Date(
                      new Date().getFullYear() - 1,
                      new Date().getMonth(),
                      new Date().getDate()
                    )
                  }
                  onChange={(event, newDate) => setDate(newDate)}
                />
              )
            }
          />

      <ListItem
            label='Note'
            detail={
              <TextInput
                placeholder='Note'
                onChange={(event) => setNote(event.nativeEvent.text)}
                value={note}
                textAlign='right'
                inputAccessoryViewID='dismissKeyboard'
                style={{
                  height: 40,
                  color: 'white',
                  flex: 1,
                  borderRadius: 8,
                  paddingLeft: 8,
                  fontSize: 16,
                }}
              />
            }
          />

<ListItem
            label='Category'
            detail={
              <TouchableOpacity
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}
                onPress={() => {
                  setSheetView('category');
                  sheetRef.current?.snapToIndex(1);
                }}
              >
                <Text
                  style={{
                    color: category?.color,
                    textTransform: 'capitalize',
                    fontSize: 16,
                  }}
                >
                  {category?.name}
                </Text>
              </TouchableOpacity>
            }
          />
         
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({})