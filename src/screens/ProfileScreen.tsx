import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Platform} from 'react-native'
import Header from '../components/Header'
import { globalColors } from '../../assets/styles/globalStyles'

const ProfileScreen = () => {
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
                        <Text style={styles.fieldLabel}>Your Email: </Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='xxx@gmail.com'
                        />
                    </View>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.fieldLabel}>Phone Number: </Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='+93123135'
                        />
                    </View>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.fieldLabel}>Website: </Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='www.gfx.com'
                        />
                    </View>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.fieldLabel}>Password: </Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='xxx.gmail.com'
                        />
                    </View>

                    {/* Logout Button */}
                    <TouchableOpacity style={styles.logoutButton}>
                        <Text style={styles.logoutButtonText}>Logout</Text>
                    </TouchableOpacity>
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
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

export default ProfileScreen