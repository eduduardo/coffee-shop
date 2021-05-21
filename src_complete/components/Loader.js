import React, { useLayoutEffect } from 'react';

import { StyleSheet, Animated, Easing } from 'react-native';
import icon from '../../assets/icon.png';

const ICON_SIZE = 35;

const styles = StyleSheet.create({
  pokeball: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    marginTop: 50,
    marginBottom: 100,
    alignSelf: 'center',
  },
});

const Loader = () => {
  const spinAnimationValue = new Animated.Value(0);

  useLayoutEffect(() => {
    Animated.loop(
      Animated.timing(spinAnimationValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bezier(0.645, 0.045, 0.355, 1.0),
        useNativeDriver: true,
        isInteraction: false,
      }),
    ).start();
  }, []);

  const spinAnimationRotate = spinAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.Image
      source={icon}
      style={{
        transform: [{ rotate: spinAnimationRotate }],
        ...styles.pokeball,
      }}
    />
  );
};

export default Loader;