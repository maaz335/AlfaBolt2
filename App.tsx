import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';


export default function App() {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text>Enter your Name: </Text><TextInput  value={name} onChangeText={(text) => setName(text)}></TextInput>
      <Text>Welcome {name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export function union(a: number, b: number): number {
  return a|b;
}

export function text(a:string): string {
  return a;
}

export function intersection(a: number, b: number): number {
  return a & b;
}

type User={
  id:number;
  name:string;
  email:string;
  phone:string;
  address:string;
  city:string;
  country:string;
  postalCode:string;
  orders:Order[];
}

type Product={
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type Order={
  id: number;
  products: Product[];
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
