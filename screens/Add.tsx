import { InputAccessoryView, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { ListItem } from '../components/ListItem'
import { TextInput } from 'react-native-gesture-handler'
import { theme } from '../theme'
import { Recurrence } from '../types/recurrence'

export const Add = () => {



  const sheetRef = useRef<BottomSheet>(null);
  const [sheetView, setSheetView] = React.useState<'recurrence' | 'category'>(
    'recurrence'
  );
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  const [date, setDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState('')
  const [note, setNote] = React.useState('');
  const [category, setCategory] = React.useState({_id: 1, color: 'red', name: 'Clothes'});
  const [categories, setCategories] = React.useState([{_id: 1, color: 'red', name: 'Clothes'},{_id: 2, color: 'green', name: 'Food'}])
  const [recurrence, setRecurrence] = React.useState<Recurrence>(Recurrence.None)

    const selectRecurrence = (selectedRecurrence: string) => {
    setRecurrence(selectedRecurrence as Recurrence);
    sheetRef.current?.close();
  };

  const submitExpense = () => {
    };

  const selectCategory = (selectedCategory: any) => {

    setCategory(selectedCategory);
    sheetRef.current?.close();
  };
  return (
    <>
      <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={112}
        style={{ margin: 16, flex: 1, alignItems: 'center'}}
      >
        <View style={{
          width: '100%',
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
          keyboardType='numeric'
          inputAccessoryViewID='dismissKeyboard'
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
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.primary,
            paddingHorizontal: 20,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 32,
            display: 'flex',
            alignItems: 'center'
          }}
          onPress={submitExpense}
        >
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 17 }}>
            Submit expense
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
       <BottomSheet
        ref={sheetRef}
        index={-1}
        handleStyle={{
          backgroundColor: theme.colors.card,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
        handleIndicatorStyle={{ backgroundColor: '#FFFFFF55' }}
        enablePanDownToClose
        snapPoints={snapPoints}
      >
        {sheetView === 'recurrence' && (
          <BottomSheetFlatList
            data={Object.keys(Recurrence)}
            keyExtractor={(i) => i}
            renderItem={(item) => (
              <TouchableHighlight
                style={{ paddingHorizontal: 18, paddingVertical: 12 }}
                onPress={() => selectRecurrence(item.item)}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>
                  {item.item}
                </Text>
              </TouchableHighlight>
            )}
            style={{ backgroundColor: theme.colors.card }}
          />
        )}
        {sheetView === 'category' && (
          <BottomSheetFlatList
            data={categories[0] ? categories : []}
            keyExtractor={({ _id }) => _id.toString()}
            renderItem={({ item }) => (
              <TouchableHighlight
                style={{ paddingHorizontal: 18, paddingVertical: 12 }}
                onPress={() => selectCategory(item)}
              >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      backgroundColor: item.color,
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                    }}
                  />
                  <Text
                    style={{ color: 'white', fontSize: 18, marginLeft: 12 }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableHighlight>
            )}
            style={{ backgroundColor: theme.colors.card }}
          />
        )}
      </BottomSheet>
      <InputAccessoryView nativeID='dismissKeyboard'>
        <View style={{height: 44, display: 'flex',justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 16, backgroundColor: theme.colors.card, borderTopColor: theme.colors.border, borderTopWidth: 1,}}>
            <TouchableOpacity onPress={() => Keyboard.dismiss()}>
              <MaterialIcons size={28} name="keyboard-hide" style={{color: theme.colors.primary}}/>
            </TouchableOpacity>
        </View>
      </InputAccessoryView>
    </>
  )
}

const styles = StyleSheet.create({})