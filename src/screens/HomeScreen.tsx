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

    <View style={styles.container}>
      <FlatList
        data={pins}
        renderItem={({ item }) => <Pin pin={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
  
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,

  },
 
});
