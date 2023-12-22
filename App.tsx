import React from 'react';
import {
  Text,
  StyleSheet,
  useColorScheme,
  View,
  SafeAreaView,
} from 'react-native';
import AppPro from './AppPro';

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{color: 'green'}}>useColorScheme(): {colorScheme}</Text>
        <AppPro />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    // padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
