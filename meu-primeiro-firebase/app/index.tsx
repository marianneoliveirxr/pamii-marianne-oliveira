import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCyeCwVj33vJxyj8rRgWSiEuhFHq09gsdI",
  authDomain: "meu-primeiro-firebase-e55ae.firebaseapp.com",
  projectId: "meu-primeiro-firebase-e55ae",
  storageBucket: "meu-primeiro-firebase-e55ae.firebasestorage.app",
  messagingSenderId: "793645483019",
  appId: "1:793645483019:web:ca60440eadf2d03191f30e"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
        />
    </View>
  );
}
