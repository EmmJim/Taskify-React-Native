import React from 'react'
import { Text, View, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { globalColors } from '../../assets/styles/globalStyles';

const LoginScreen = ({navigation, route}) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                style={styles.centerContent} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.textContainer}>
                    <Image source={require('../../assets/LogoTaskify.png')} style={styles.taskifyLogo}/>
                </View>

                <View style={{marginTop: 50}}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                </View>

                <View style={{marginTop: 50, gap: 30, width: '70%'}}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('SignIn')}
                        style={styles.signInButton}
                    >
                        <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('SignUp')}
                        style={styles.signUpButton}
                    >
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColors.secondary,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    centerContent: {
        width: '90%',
    },
    scrollContent: {
        flexGrow: 1, // Hace que el ScrollView ocupe todo el espacio disponible
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskifyLogo: {
        height: 200, 
        width: 500
    },
    welcomeText: {
        fontSize: 30, 
        color: globalColors.white
    },
    signInButton: {
        backgroundColor: globalColors.secondaryPurple, 
        padding: 10, 
        borderRadius: 20, 
        alignItems: 'center'
    },
    signInText: {
        color: globalColors.white, 
        fontWeight: 'bold', fontSize: 18
    },
    signUpButton: {
        backgroundColor: globalColors.white, 
        padding: 10, 
        borderRadius: 20, 
        alignItems: 'center'
    },
    signUpText: {
        color: globalColors.secondary, 
        fontWeight: 'bold', 
        fontSize: 18
    }
});

export default LoginScreen;