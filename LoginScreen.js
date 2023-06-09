import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Import the background image
import backgroundImage from './pak3.jpg';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    if (phoneNumber === '' || password === '') {
      Alert.alert('Error', 'Please enter a valid phone number and password');
      return;
    }

    // Continue with the login process
    // ...
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    // ...
    Alert.alert('Forgot Password', 'Feature coming soon!');
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const placeholderText = 'Phone Number';

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.heading}></Text>
        <View style={styles.phoneNumberContainer}>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder={placeholderText}
            placeholderTextColor="white"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.showPasswordButton}>
            <FontAwesome
              name={showPassword ? 'eye' : 'eye-slash'}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 6,
    width: 280,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#efc75e',
    fontSize: 20,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: '#efc75e',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#efc75e',
  },
  phoneNumberContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  phoneNumberInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#efc75e',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
  },
  passwordContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#efc75e',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
  },
  showPasswordButton: {
    marginLeft: -25,
    backgroundColor: 'transparent',
  },
});
