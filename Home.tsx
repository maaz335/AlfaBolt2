import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './routing';
import { SetStateAction, useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>What is your name:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 20 }}
        placeholder="Enter your userId"
        onChangeText={setName}
        value={name}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', { userId: name })}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});