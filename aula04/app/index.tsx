// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJy88h-X1nEYRuK0rEHUO-8yUJG4bc75M",
  authDomain: "meu-primeiro-firebase-e9077.firebaseapp.com",
  projectId: "meu-primeiro-firebase-e9077",
  storageBucket: "meu-primeiro-firebase-e9077.firebasestorage.app",
  messagingSenderId: "299924125902",
  appId: "1:299924125902:web:c0d3fa3720f2fb05fdf89f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center',
    alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
      data={nomes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text></Text>
        </View>
      )}
  )
}