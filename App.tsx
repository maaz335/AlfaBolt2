import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sir I installed React Native using Expo and</Text><Text>installed my first app!</Text> 
      <Text>Union of 5 and 3 is {union(5, 3)}</Text>
      <Text>Intersection of 5 and 3 is {intersection(5, 3)}</Text>
      <Text>TypeScript is working!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export function union(a: number, b: number): number {
  return a|b;
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
