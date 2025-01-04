import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <Header />
                <Text>ProfileScreen</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f0fd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerContent: {
        width: '85%'
    },
})

export default ProfileScreen