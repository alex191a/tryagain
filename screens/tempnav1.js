import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import 'react-native-gesture-handler';
import Chart from './tempnav3.js';
import List  from './tempnav2.js';

const Stack = createStackNavigator();
function Stacker(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name= "Chart"
            component= {Chart}/>
            <Stack.Screen
            name= "List"
            component = {List}/>
        </Stack.Navigator>
    )
}
export default function trying(){
    return(
    <NavigationContainer>
        <Stacker/>
    </NavigationContainer>
    )
}