import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './LoginScreen';
import FrontPage from './FrontPage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // Set the isLoggedIn state to true if login is successful
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? <FrontPage /> : <LoginScreen onLogin={handleLogin} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
