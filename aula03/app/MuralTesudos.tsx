import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MuralTesudos = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Bem vindo ao mural dos
            </Text>
            <Text style={styles.subtitle}>
                tesudos 
            </Text>

        <Image source={{ uri:'https://via.placeholder.com/300'}} style={styles.image} />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Saiba Mais </Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#D81B60',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        color: '#D81B60',
        marginBottom: 30,
        textAlign: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
        marginButtom: 30,
        borderWidth: 3,
        borderColor: '#D81B60',
    },
    button: {
        backgroundColor: '#D81B60',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        FontSize: 18,
        fontWeight: 'bold',
    },
});

export default MuralTesudos;