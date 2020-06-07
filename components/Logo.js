import React from 'react';
import Animated from 'react-native-reanimated';
import {Text, StyleSheet} from 'react-native';

const Logo = ({scale}) => {
  return (
    <Animated.View style={{...styles.logo, transform: [{scale}]}}>
      <Text style={styles.font}>Uber</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#fff',
    height: 120,
    width: 120,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontWeight: '400',
    fontSize: 36,
  },
});

export default Logo;
