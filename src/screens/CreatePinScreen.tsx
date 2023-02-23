import { RootTabScreenProps } from '../../types';
import React, { useState, useEffect } from 'react';
import {
  Button,
  Image,
  View,
  Platform,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
export default function CreatePinScreen({
  navigation,
}: RootTabScreenProps<'CreatePin'>) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,

      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };
  const handleSubmit = () => {};
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an pins from camera roll" onPress={pickImage} />
      {image && (
        <>
          <Image
            source={{ uri: image }}
            style={{ width: '100%', aspectRatio: 1 }}
          />
          <TextInput
            onChangeText={setTitle}
            value={title}
            style={styles.input}
            placeholder="Title"
          />
          <Button
            title="Pick an pins from camera roll"
            onPress={handleSubmit}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    padding: 10,
    borderRadius: 5,
  },
});
