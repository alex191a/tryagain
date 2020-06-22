import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default function index() {
  
  var myArray = ["Bedste ornitolog EU", "Elsker fuglesang", "Har arbejdet på det lokale bibliotek i 17 år", "Har det fedeste hår", "Har pisse flotte briller", "Er noget af en frækkert" ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View>
        
        <Text style={styles.title}>
        </Text>
        <Button
          title="A1.38"
          onPress={() => Alert.alert(myArray[Math.floor(Math.random(myArray) * myArray.length)])}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
        </Text>
        <Button
          title="A1.39"
          onPress={() => Alert.alert('Hvis du til fuglekending, selv er et fjog, så spørg Paul Hansen ornitlog')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
        </Text>
        <Button
          title="A1.40"
          onPress={() => Alert.alert('Det er så ikke lavet endnu mester')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
        </Text>
        <Button
          title="A1.41"
          onPress={() => Alert.alert('De er så ikke lavet endnu mester')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
        </Text>
        <Button
          title="A29"
          onPress={() => Alert.alert('De er så ikke lavet endnu mester')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
        </Text>
        <Button
          title="A30"
          onPress={() => Alert.alert('De er så ikke lavet endnu mester')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
        </Text>
        <Button
          title="A31"
          onPress={() => Alert.alert('De er så ikke lavet endnu mester')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
        </Text>
        <Button
          title="A33"
          onPress={() => Alert.alert('De er så ikke lavet endnu mester')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
        </Text>
        <Button
          title="CO1"
          onPress={() => Alert.alert('De er så ikke lavet endnu mester')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
        </Text>
        <Button
          title="OLC"
          onPress={() => Alert.alert('De er så ikke lavet endnu mester')}
        />
      </View>
      <Separator />
      </ScrollView>
   </SafeAreaView>
  );
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
