import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme, Switch } from 'react-native';

export default function Hello() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setIsDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>Hello Omkar!</Text>
      <View style={styles.toggleContainer}>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>Light Mode</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBackground: {
    backgroundColor: '#fff',
  },
  darkBackground: {
    backgroundColor: '#1e1e1e',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e1e1e', 
  },
  lightText: {
    color: '#1e1e1e',
  },
  darkText: {
    color: '#fff',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '80%',
  },
});
