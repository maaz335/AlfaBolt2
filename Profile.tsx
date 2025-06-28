import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './routing';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ route, navigation }: Props) {
  const { userId, name } = route.params;
  
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Text>User ID: {userId}</Text>
      {name && <Text>Name: {name}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});