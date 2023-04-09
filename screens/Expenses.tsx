import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ExpensesList } from '../components/ExpensesList'
import { Recurrence } from '../types/recurrence'

export const Expenses = () => {
  return (
    <ExpensesList groups={[{
      day: 'Today',
      expenses: [{
        id: '1',
        amount: 100,
        category: {
          id: 1,
          name: 'Food',
          color: '#FFD600'
        },
        date: new Date(),
        note: 'Bought some food',
        recurrence: Recurrence.None,
      },
      {
        id: '2',
        amount: 200,
        category: {
          id: 1,
          name: 'Clothes',
          color: '#FF6D00'
        },
        date: new Date(),
        note: 'Bought some clothes',
        recurrence: Recurrence.None,
      }],
      total: 300,
    },
    {
      day: 'Yesterday',
      expenses: [{
        id: '1',
        amount: 100,
        category: {
          id: 1,
          name: 'Food',
          color: '#FFD600'
        },
        date: new Date(),
        note: 'Bought some food',
        recurrence: Recurrence.None,
      },
      {
        id: '2',
        amount: 200,
        category: {
          id: 1,
          name: 'Clothes',
          color: '#FF6D00'
        },
        date: new Date(),
        note: 'Bought some clothes',
        recurrence: Recurrence.None,
      }],
      total: 300,
    }
  ]}/>
  )
}

const styles = StyleSheet.create({})