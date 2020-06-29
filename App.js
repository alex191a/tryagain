import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Alert } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';

import RoomChart from './screens/LinksScreen.js'
import Roomlist from './screens/HomeScreen.js';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      /*<View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>*/
      <Roomlist roomNames={['a1','23','3r3','ree','yeetus feeleetus']}/>
    );
  }
}
 mis = () => {
     return(
    console.log("shit is broken"),
  <RoomChart/>)
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',      
  },
});
navstac = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="RoomList" component={Roomlist}/>
            <Stack.Screen name="RoomChart" component={roomchart}/>
        </Stack.Navigator>
    );
}
export function mis(){
  return mis
};
export function navstac(){
    <NavigationContainer>
        <navstac />
    </NavigationContainer>
}