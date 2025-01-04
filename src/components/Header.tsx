import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Header = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.topMenu}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                <Ionicons name="menu" size={24} color="#2E3A59" />
            </TouchableOpacity><TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <FontAwesome name="user-circle" size={24} color="#2E3A59" />
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    topMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default Header