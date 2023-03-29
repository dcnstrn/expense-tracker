import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Expenses, Reports, Add, Settings} from './screens';
import { theme } from './theme';
import { TabBarIcon } from './components/TabBarIcon';


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer theme={theme}>
       <StatusBar style="light" />
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
