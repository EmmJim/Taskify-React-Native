import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

interface ListCardItemProps {
    title: String,
    date: String
}

const ListCardItem: React.FC<ListCardItemProps> = ({title, date}) => {
    return (
        <View 
            style={styles.card}>
            <View style={styles.cardView}>
                <Image style={styles.cardImage} source={{uri: 'https://cdn-icons-png.flaticon.com/512/8003/8003352.png'}}/>
                <View>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardSubtitle}>{date}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white', padding: 20, borderRadius: 20, shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13}
    },
    cardView: {flexDirection: 'row', gap: 30},
    cardImage: {width: 30, height: 30},
    cardTitle: {fontWeight: 'bold', fontSize: 18},
    cardSubtitle: {fontSize: 12}

})

export default ListCardItem