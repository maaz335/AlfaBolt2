import { StyleSheet, Text, View, Button, TextInput, Image,Animated, Easing } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './routing';
import { SetStateAction, useEffect, useRef, useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    const [name, setName] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(100)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

        useEffect(() => {
        // Run animations when component mounts
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 1000,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 3,
                useNativeDriver: true,
            })
        ]).start();
    }, [fadeAnim, slideAnim, scaleAnim]);

  return (
    <View style={styles.container}>
    <Animated.View style={{
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }, { scale: scaleAnim }]
            }}>
      <Text>Home Screen</Text>
<Image src='https://static.vecteezy.com/system/resources/previews/025/894/618/non_2x/cute-word-hello-cartoon-style-illustration-vector.jpg'  width={200} height={100} resizeMode='contain'></Image>

     
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
                  </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    
  backgroundColor: 'white',
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});