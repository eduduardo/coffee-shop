import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';

import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../helpers';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    paddingHorizontal: 35,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,

    // ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 0,
    // android
    elevation: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

const Card = (item) => {
  const navigation = useNavigation();

  const handleGoSingle = () => {
    navigation.navigate('SingleCoffee', { ...item });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleGoSingle()}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text>{item.name}</Text>
      <Text>{`R$ ${item.price.toFixed(2)}`}</Text>
    </TouchableOpacity>
  );
};
export default Card;
