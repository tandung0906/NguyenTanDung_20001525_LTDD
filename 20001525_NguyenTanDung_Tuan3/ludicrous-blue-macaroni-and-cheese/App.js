import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}></View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          GROW{'\n'}YOUR BUSINESS
        </Text>
        <Text style={styles.description}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    top: 6,
    left: 10,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: 'black',
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
