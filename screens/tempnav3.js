import * as React from 'react';
import {View,Text,Button} from 'react-native';

export default function Chart({navigation}){
    return (
        <View>
            <Text>shit 3</Text>
            <Button
            title= "go to other shit"
            onPress={()=>navigation.navigate('Liste')}/>
        </View>
    )
}