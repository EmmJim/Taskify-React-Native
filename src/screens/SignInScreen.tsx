import React from 'react'
import { Text, View, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView, TouchableOpacity, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import { globalColors } from '../../assets/styles/globalStyles';
import useForm from '../hooks/useForm';

const SignInScreen = ({navigation, route}) => {

    const [formValues, handleOnTextChange] = useForm({
        email: '',
        password: ''
    });

    console.log(formValues);

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
                            <Image source={require('../../assets/LogoTaskify.png')} style={styles.taskifyLogo}/>
                        </View>


                        <View style={styles.card}>
                                <View style={styles.cardGap}>
                                    <View>
                                        <Text style={styles.formLabel}>Email</Text>
                                        <TextInput 
                                            onChangeText={(value) => {
                                                handleOnTextChange('email', value)
                                            }}
                                            style={styles.formInput}
                                        />
                                    </View>

                                    <View>
                                        <Text style={styles.formLabel}>Password</Text>
                                        <TextInput
                                            secureTextEntry
                                            onChangeText={(value) => {
                                                handleOnTextChange('password', value)
                                            }}
                                            style={styles.formInput}
                                        />
                                    </View>

                                    <View style={styles.forgotPassContainer}>
                                        <TouchableOpacity>
                                            <Text>Forgot Password?</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <TouchableOpacity style={styles.signInButton}>
                                        <Text style={styles.signInText}>Sign In</Text>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Text>Don't have an account?</Text>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('SignUp')}
                                    >
                                        <Text style={styles.signUpText}>Sign Up</Text>
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
    taskifyLogo: {
        height: 200, 
        width: 400
    },
    card: {
        backgroundColor: 'white', 
        marginTop: 10, 
        padding: 30, 
        width: '100%', 
        borderRadius: 30, 
        flex: 1, 
        justifyContent: 'space-between'
    },
    cardGap: {
        gap: 30
    },
    formLabel: {
        color: globalColors.secondary, 
        fontWeight: 'bold', 
        fontSize: 18
    },
    formInput: {
        padding: 10, 
        borderBottomWidth: 0.3
    },
    forgotPassContainer: {
        marginTop: 10, 
        alignItems: 'flex-end'
    },
    signInButton: {
        backgroundColor: globalColors.secondary, 
        padding: 10, 
        borderRadius: 20
    },
    signInText: {
        fontWeight: 'bold', 
        color: globalColors.white, 
        fontSize: 18, 
        textAlign: 'center'
    },
    signUpText: {
        fontWeight: 'bold'
    }
});

export default SignInScreen;