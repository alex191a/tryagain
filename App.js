import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import 'react-native-gesture-handler';
import RoomChart from './screens/LinksScreen.js';
import Roomlist from './screens/HomeScreen.js';

const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
        <NavStack />
        </NavigationContainer>
    )
}
function NavStack(){
    return(
        <Stack.Navigator initialRouteName="RoomList" >
            <Stack.Screen name="RoomList" component={Roomlist}/>
            <Stack.Screen name="RoomChart" component={RoomChart}/>
        </Stack.Navigator>
    );
}