import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function PinScreen() {
  return (
    <View style={styles.container}>
      <Text>Pin Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
