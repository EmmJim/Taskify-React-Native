import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Platform, Switch} from 'react-native'
import Header from '../components/Header'
import { globalColors } from '../../assets/styles/globalStyles'

const SettingsScreen = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centerContent}>
                <Header iconColor={globalColors.secondary}/>
                {/* Profile Picture */}
                <View style={styles.profilePictureContainer}>
                    <Image 
                        style={styles.imageProfile} 
                        source={{
                            uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
                        }}
                    />
                    <Text style={styles.nameProfile}>Emmanuel Jimenez</Text>
                    <Text style={styles.subtitleProfile}>Mobile Developer</Text>
                </View>
                {/* FORM */}
                <View style={styles.formContainer}>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.fieldLabel}>Account Settings</Text>
                        <TouchableOpacity
                            style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.2, borderBottomColor: globalColors.lightGray, paddingVertical: 15, paddingRight: 8}}
                            onPress={() => navigation.navigate('Profile')}                            
                        >
                            <Text>Edit Profile</Text>
                            <Text>{'>'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.2, borderBottomColor: globalColors.lightGray, paddingVertical: 15, paddingRight: 8}}>
                            <Text>Change Password</Text>
                            <Text>{'>'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.2, borderBottomColor: globalColors.lightGray, paddingVertical: 15, paddingRight: 8}}>
                            <Text>About Us</Text>
                            <Text>{'>'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.2, borderBottomColor: globalColors.lightGray, paddingVertical: 15, paddingRight: 8}}>
                            <Text>Privacy Policy</Text>
                            <Text>{'>'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.2, borderBottomColor: globalColors.lightGray, paddingVertical: 15, paddingRight: 8}}>
                            <Text>Language</Text>
                            <Text>{'>'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.2, borderBottomColor: globalColors.lightGray, paddingVertical: 15, paddingRight: 8}}>
                            <Text>Notifications</Text>
                            <Switch
                                trackColor={{false: '#767577', true: '#0649cf'}}
                                thumbColor={isEnabled ? 'white' : globalColors.gray}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                style={{
                                    transform: [{scaleX: 0.7}, {scaleY: 0.7}], // Escala el switch completo (track y thumb)
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f0fd',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    centerContent: {
        width: '90%'
    },
    profilePictureContainer: {
        alignItems: 'center', 
        marginVertical: 30
    },
    imageProfile: { 
        height: 100, 
        width: 100, 
        borderRadius: 100
    },
    nameProfile: {
        marginTop: 10, 
        fontWeight: 'bold', 
        fontSize: 18
    },
    subtitleProfile: {
        fontWeight: 'light', 
        fontSize: 13, 
        color: globalColors.lightGray
    },
    formContainer: {
        marginVertical: 20,
        backgroundColor: globalColors.white,
        padding: 20,
        borderRadius: 20
    },
    fieldContainer: {
        marginVertical: 10
    },
    fieldLabel: {
        fontWeight: 'bold', 
        marginBottom: 10
    },
    input: {
        borderWidth: 0.7, 
        borderColor: globalColors.secondary, 
        borderRadius: 10, padding: 10
    },
    logoutButton: {
        borderWidth: 1, 
        backgroundColor: globalColors.secondary,
        borderRadius: 10, 
        padding: 10, 
        marginTop: 40
    },
    logoutButtonText: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        color: globalColors.white
    }
})

export default SettingsScreen