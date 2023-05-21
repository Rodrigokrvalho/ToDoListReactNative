import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Main } from './src/views/Main';
import { colors } from './src/globalstyles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent style='dark' />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
