import { StyleSheet ,FlatList, ScrollView} from 'react-native';
import pins from '../../assets/data/pins';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import Pin from '../components/Pin';
export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'HomeScreen'>) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.column}>
          {pins
            .filter((_, i) => i % 2 === 0)
            .map(pin => (
              <Pin key={pin.id} pin={pin} />
            ))}
        </View>
        <View style={styles.column}>
          {pins
            .filter((_, i) => i % 2 === 1)
            .map(pin => (
              <Pin key={pin.id} pin={pin} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

    paddingTop: 50,
    flexDirection: 'row',

  },
  column: {
    flex: 1,
  },
 
});
