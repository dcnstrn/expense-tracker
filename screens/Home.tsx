import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { TabBarIcon } from '../components/TabBarIcon';
import {Expenses, Reports, Add, Settings} from '../screens';

const Tab = createBottomTabNavigator()

export function Home() {
  return (
    <Tab.Navigator>
    <Tab.Screen  options={{
      tabBarIcon: (props) => <TabBarIcon {...props} type='expenses' />,
    }} name='Expenses' component={Expenses} />
    <Tab.Screen  options={{
      tabBarIcon: (props) => <TabBarIcon {...props} type='reports' />,
    }} name='Reports' component={Reports} />
    <Tab.Screen  options={{
      tabBarIcon: (props) => <TabBarIcon {...props} type='add' />,
    }} name='Add' component={Add} />
    <Tab.Screen  options={{
      tabBarIcon: (props) => <TabBarIcon {...props} type='settings' />,
    }} name='Settings' component={Settings} />
  </Tab.Navigator>
  )
}