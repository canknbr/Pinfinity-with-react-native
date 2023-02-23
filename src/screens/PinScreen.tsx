import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import pins from '../../assets/data/pins';

export default function PinScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  const pin = pins.find(pin => pin.id === id);
  if (!pin) return <Text> No pin found</Text>;
  const { image, title } = pin;
  const [ratio, setRatio] = useState(1);
  useEffect(() => {
    Image.getSize(image, (width, height) => {
      setRatio(width / height);
    });
  }, [image]);
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          overflow: 'hidden',
          backgroundColor: 'black',
        }}
      >
        <Image
          source={{ uri: image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <TouchableOpacity
          style={styles.iconWrapper}
          activeOpacity={0.6}
          onPress={handleBack}
        >
          <AntDesign name="arrowleft" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconWrapper: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    marginTop: 50,
    letterSpacing: 1,
    alignSelf: 'center',
    color: 'white',
  },
});
