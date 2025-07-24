import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.title}>Bienvenido a Privex</Text>
      <View style={styles.buttonContainer}>
        <Button title="Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
        <Button title="Registrarme" onPress={() => navigation.navigate('Register')} color="#007BFF" />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
});
