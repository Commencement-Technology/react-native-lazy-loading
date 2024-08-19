import React from 'react';
import { Button, Text, View } from 'react-native';
import { navigate } from '../navigation';

const HomeScreen = () => {
  return (
    <View>
      <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
      <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <Button title={'Go to About'} color={'black'} onPress={() => navigate('About')} />
      </View>
    </View>
  );
};

export default HomeScreen;
