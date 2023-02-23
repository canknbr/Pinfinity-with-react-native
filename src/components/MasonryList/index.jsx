import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import Pin from '../Pin'
const MasonryList = ({pins}) => {
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

export default MasonryList