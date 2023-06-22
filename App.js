import {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card, TextInput } from 'react-native-paper';

export default function App() {
  const [state, setState] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        label='Name'
        mode='outlined'
        value={state}
        onChangeText={text => setState(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
