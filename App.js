import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import TelaA from './src/views/TelaA';
import TelaB from './src/views/TelaB';
import TelaC from './src/views/TelaC';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TelaA />
      <TelaB />
      <TelaC />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
