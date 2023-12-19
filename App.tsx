import React from 'react';

import {View, Text, SafeAreaView, Button, Alert} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello Omkar Here !!</Text>
        <Text>Hello Omkar Here !!</Text>
        <Text>Hello Omkar Here !!</Text>
        <Text>Hello Omkar Here !!</Text>
        <Text>Hello Omkar Here !!</Text>
        <Text>Hello Omkar Here !!</Text>
        <Button
          title="Press Me"
          onPress={() => Alert.alert('Omkar The Mobile Developer!!')}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
