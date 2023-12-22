import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDark = useColorScheme() === 'dark';
  //   isDark = false;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDark ? styles.darkText : styles.whiteText}>
          HI from AppPro!!!!!!!
        </Text>
        <View
          style={{
            padding: 20,
            backgroundColor: 'tomato',
            borderRadius: 20,
            margin: 10,
          }}>
          <Button
            title="click me!!!!"
            onPress={() => {
              Alert.alert('You clicked me I am working Fine ! ! !');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'seagreen',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  whiteText: {
    color: '#000000',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  darkText: {
    color: '#FFFFFF',
    backgroundColor: 'black',
    textAlign: 'center',
  },
});

export default AppPro;
