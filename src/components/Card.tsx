import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { globalColors, globalStyles } from '../../assets/styles/globalStyles';
import { TaskItem } from '../types/types'

interface CardProps {
    item: TaskItem
}

const Card: React.FC<CardProps> = ({item}) => {
    return (
        <View style={globalStyles.cardContainer}>
            <LinearGradient 
                colors={[globalColors.secondary, globalColors.secondaryPurple]} // Colores del gradiente (puedes cambiarlos)
                style={globalStyles.card} // Estilo de la tarjeta
                start={{ x: 0, y: 0 }} // Dirección del gradiente
                end={{ x: 1, y: 1 }}   // Dirección del gradiente
            >
                <View style={styles.cardHeader}>
                    <Image style={styles.cardImage} source={{
                        uri: 'https://cdn-icons-png.freepik.com/256/10969/10969233.png?semt=ais_hybrid'
                    }}></Image>
                    <Text style={styles.projectName}>{item.projectName}</Text>
                </View>
                <Text style={styles.taskName}>{item.name}</Text>
                <Text style={globalStyles.textWhite}>{item.date ? new Date(item.date).toDateString() : null}</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    cardHeader: {flexDirection: 'row', gap: 15, alignItems: 'center'},
    cardImage: {height: 30, width: 30},
    projectName: {color: 'white', fontWeight: 'bold', fontSize: 15},
    taskName: {color: 'white', fontWeight: 'bold', fontSize: 25},
})

export default Card