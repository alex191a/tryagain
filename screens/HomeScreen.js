import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import vav from 'LinkScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
function Separator() {
  return <View style={styles.separator} />;
}

class index extends Component{
  state = {
      roomId: 45
  }
  render(){
  var myArray = ["Bedste ornitolog EU", "Elsker fuglesang", "Har arbejdet på det lokale bibliotek i 17 år", "Har det fedeste hår", "Har pisse flotte briller", "Er noget af en frækkert" ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
            <Text style={styles.title}>
            </Text>
            <Button
            title="A1.38"
            onPress={() => component={vav}, this.setstate({roomId:45})}
            />
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
            </Text>
            <Button
            title="A1.39"
            onPress={() => this.setstate({roomId:45})}
            />
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
            </Text>
            <Button
            title="A1.40"
            onPress={() => this.setstate({roomId:45})}
            />
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
            </Text>
            <Button
            title="A1.41"
            onPress={() => this.setstate({roomId:45})}
            />
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
            </Text>
            <Button
            title="A29"
            onPress={() => this.setstate({roomId:45})}
            />
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
            </Text>
            <Button
            title="A30"
            onPress={() => this.setstate({roomId:45})}
            />
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
            </Text>
            <Button
            title="A31"
            onPress={() => this.setstate({roomId:45})}
            />
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
            </Text>
            <Button
            title="A33"
            onPress={() => this.setstate({roomId:45})}
            />
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
            </Text>
            <Button
            title="CO1"
            onPress={() => this.setstate({roomId:45})}
            />
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
            </Text>
            <Button
            title="OLC"
            onPress={() => this.setstate({roomId:45})}
            />
        </View>
        <Separator />
      </ScrollView>
   </SafeAreaView>
  );
  }
}
index.navigationOptions = {
    header: null,
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default index