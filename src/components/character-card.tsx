import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Character } from '../types/character';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const CharacterCard = ({ character }: { character: Character }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.name}>{character.name}</Text>
            <Text>{character.species} - {character.status}</Text>
        </View>
    );
};

export default CharacterCard;

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
});
