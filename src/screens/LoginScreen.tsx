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
                    <Image source={require('../../assets/LogoTaskify.png')} style={{height: 200, width: 500}}/>
                </View>

                <View style={{marginTop: 50}}>
                    <Text style={{fontSize: 30, color: globalColors.white}}>Welcome</Text>
                </View>

                <View style={{marginTop: 50, gap: 30, width: '70%'}}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('SignIn')}
                        style={{backgroundColor: globalColors.secondaryPurple, padding: 10, borderRadius: 20, alignItems: 'center'}}
                    >
                        <Text style={{color: globalColors.white, fontWeight: 'bold', fontSize: 18}}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('SignUp')}
                        style={{backgroundColor: globalColors.white, padding: 10, borderRadius: 20, alignItems: 'center'}}
                    >
                        <Text style={{color: globalColors.secondary, fontWeight: 'bold', fontSize: 18}}>Sign Up</Text>
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
});

export default LoginScreen;