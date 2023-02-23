import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
const Pin = ({ pin }) => {
    const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const [ratio, setRatio] = useState(1);
  const onLike = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    {
      pin.image &&
        Image.getSize(pin.image, (width, height) => {
          setRatio(width / height);
        });
    }
  }, [pin.image]);
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('PinScreen', { id: pin.id})}
     style={styles.pin}>
      <View>
        <Image
          source={{
            uri: pin.image,
          }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <View style={styles.heartIcon}>
          <TouchableOpacity activeOpacity={0.8} onPress={onLike}>
            <AntDesign name="heart" size={16} color={liked ? 'red' : 'gray'} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>{pin.title}</Text>
    </TouchableOpacity>
  );
};

export default Pin;
