import React from 'react'
import { Text, View, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView, TouchableOpacity, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import { globalColors } from '../../assets/styles/globalStyles';

const SignInScreen = ({navigation, route}) => {

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.keyboardView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <SafeAreaView style={styles.container}>
                    <ScrollView 
                        style={styles.centerContent} 
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContent}
                    >
                        <View style={styles.textContainer}>
                            <Image source={require('../../assets/LogoTaskify.png')} style={{height: 200, width: 400}}/>
                        </View>


                        <View style={{backgroundColor: 'white', marginTop: 10, padding: 30, width: '100%', borderRadius: 30, flex: 1, justifyContent: 'space-between'}}>
                                <View style={{gap: 30}}>
                                    <View>
                                        <Text style={{color: globalColors.secondary, fontWeight: 'bold', fontSize: 18}}>Email</Text>
                                        <TextInput 
                                            style={{padding: 10, borderBottomWidth: 0.3}}
                                        />
                                    </View>

                                    <View>
                                        <Text style={{color: globalColors.secondary, fontWeight: 'bold', fontSize: 18}}>Password</Text>
                                        <TextInput
                                            secureTextEntry
                                            style={{padding: 10, borderBottomWidth: 0.3}}
                                        />
                                    </View>

                                    <View style={{ marginTop: 10, alignItems: 'flex-end'}}>
                                        <TouchableOpacity>
                                            <Text>Forgot Password?</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <TouchableOpacity style={{backgroundColor: globalColors.secondary, padding: 10, borderRadius: 20}}>
                                        <Text style={{fontWeight: 'bold', color: globalColors.white, fontSize: 18, textAlign: 'center'}}>Sign In</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <Text>Don't have an account?</Text>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('SignUp')}
                                    >
                                        <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    keyboardView: {flex: 1},
    container: {
        flex: 1,
        backgroundColor: globalColors.secondary,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    centerContent: {
        width: '100%',
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

export default SignInScreen;