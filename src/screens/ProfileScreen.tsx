import { Image, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import MasonryList from '../components/MasonryList';
import pins from '../../assets/data/pins';
export default function ProfileScreen({
  navigation,
}: RootTabScreenProps<'Profile'>) {
  return (
    <ScrollView style={{
      backgroundColor: 'white',
    }}>
      <View style={styles.container}>
        <View style={{
          alignItems: 'center',
        }}>
          <Image
            style={styles.image}
            source={require('../../assets/images/can.jpg')}
          />
          
        </View>
        <Text style={styles.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        </Text>
        <MasonryList pins={pins}  />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,



  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 80,
  },
 title: {
    fontSize: 20,
    textAlign: 'center',
 },
});
