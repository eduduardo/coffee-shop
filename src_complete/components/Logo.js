import React from 'react';

import { Image, StyleSheet } from 'react-native';
import logo from '../../assets/logo.png';

const styles = StyleSheet.create({
  logo: {
    width: 240,
    height: 80,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

const Logo = () => <Image source={logo} style={styles.logo} />;

export default Logo;
