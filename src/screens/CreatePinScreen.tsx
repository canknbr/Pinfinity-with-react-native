import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function CreatePinScreen({
  navigation,
}: RootTabScreenProps<'CreatePinScreen'>) {
  return (
    <View style={styles.container}>
      <Text>Create Pin Screen</Text>
      

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
