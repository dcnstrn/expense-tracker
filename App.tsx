import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { theme } from './theme';
import { Categories } from './screens/Categories';
import { Home } from './screens/Home';

const Stack = createNativeStackNavigator()
 
export default function App() {
  return (
    <NavigationContainer theme={theme}>
       <StatusBar style="light" />
       <Stack.Navigator>
        <Stack.Screen
        options={{headerShown: false}}
        name='Home'
        component={Home}
        />
      <Stack.Screen name='Categories' component={Categories}/>
       </Stack.Navigator>
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
