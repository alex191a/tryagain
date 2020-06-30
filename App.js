import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Alert } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import 'react-native-gesture-handler';
import RoomChart from './screens/LinksScreen.js';
import Roomlist from './screens/HomeScreen.js';
import Temp from './screens/tempnav1.js'

const Stack = createStackNavigator();

export default function App(props) {
    return(
        <NavigationContainer>
        <NavStack />
        </NavigationContainer>
    )
      //<Roomlist roomNames={['a1','23','3r3','ree','yeetus feeleetus']}/>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',      
  },
});
function NavStack(){
    return(
        <Stack.Navigator initialRouteName="RoomList" >
            <Stack.Screen name="RoomList" component={Roomlist}/>
            <Stack.Screen name="RoomChart" component={RoomChart}/>
        </Stack.Navigator>
    );
}
export function mis({navigation}){
  navigation.navigate('Roomchart')
};