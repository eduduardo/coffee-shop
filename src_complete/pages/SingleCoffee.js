import React, { useCallback, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, Alert } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

import small from '../../assets/small.png';
import medium from '../../assets/medium.png';
import large from '../../assets/large.png';
import xlarge from '../../assets/xlarge.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../helpers';

const { width } = Dimensions.get('screen');

const cupsIcons = [
  {
    size: 'S',
    icon: small,
  },
  {
    size: 'M',
    icon: medium,
  },
  {
    size: 'L',
    icon: large,
  },
  {
    size: 'XL',
    icon: xlarge,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
    color: colors.primary,
  },
  price: {
    fontSize: 25,
    color: '#666',
  },
  cupsRow: {
    flexDirection: 'row',
  },
  cup: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
    opacity: 0.5,
  },
  cupSelected: {
    opacity: 1,
  },
  buyButtonContainer: {
    marginRight: 10,
    marginTop: 20,
    width: width - 100,
  },
  buyButton: {
    backgroundColor: colors.primary,
  },
  buyIcon: {
    fontSize: 24,
    color: '#fff',
    marginRight: 5,
  },
});

const SingleCoffee = ({ route, navigation }) => {
  const { name, image, price, sizes } = route.params;
  const [cupSize, selectCupSize] = useState('M');

  useLayoutEffect(
    () =>
      navigation.setOptions({
        title: name,
      }),
    [navigation, name],
  );

  const handleBuy = useCallback(() => {
    Alert.alert(
      'Cupom efetuada',
      `Você comprou um ${name} tamanho: ${cupSize} por R$ ${price.toFixed(2)}`,
    );
  }, [name, price, cupSize]);

  const avaliableCupsSizes = cupsIcons.filter(
    (cup) => sizes.indexOf(cup.size) !== -1,
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{`R$ ${price.toFixed(2)}`}</Text>

      <View style={styles.cupsRow}>
        {avaliableCupsSizes.map((cup, index) => (
          <TouchableOpacity key={index} onPress={() => selectCupSize(cup.size)}>
            <Image
              source={cup.icon}
              style={[styles.cup, cupSize === cup.size && styles.cupSelected]}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Button
        containerStyle={styles.buyButtonContainer}
        buttonStyle={styles.buyButton}
        title="Comprar"
        icon={<Icon name="shopping-cart" style={styles.buyIcon} />}
        onPress={() => handleBuy()}
      />
    </View>
  );
};

export default SingleCoffee;
