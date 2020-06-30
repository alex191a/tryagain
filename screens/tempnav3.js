import * as React from 'react';
import {View,Text,Button} from 'react-native';
import temp from './tempnav1';

export default function pls({navigation}){
    return (
        <View>
            <Text>shit 3</Text>
            <Button
            title= "go to other shit"
            onPress={()=>temp.navigation.navtigate('List')}/>
        </View>
    )
}