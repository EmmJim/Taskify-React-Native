import React from 'react'
import { Text, View, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView, TouchableOpacity, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import { globalColors } from '../../assets/styles/globalStyles';

const SignUpScreen = ({navigation, route}) => {

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
                                        <Text style={styles.formLabel}>Full Name</Text>
                                        <TextInput 
                                            style={styles.formInput}
                                        />
                                    </View>

                                    <View>
                                        <Text style={styles.formLabel}>Email</Text>
                                        <TextInput 
                                            style={styles.formInput}
                                        />
                                    </View>

                                    <View>
                                        <Text style={styles.formLabel}>Password</Text>
                                        <TextInput
                                            secureTextEntry
                                            style={styles.formInput}
                                        />
                                    </View>

                                    <View>
                                        <Text style={styles.formLabel}>Confirm Password</Text>
                                        <TextInput
                                            secureTextEntry
                                            style={styles.formInput}
                                        />
                                    </View>

                                    

                                    <TouchableOpacity style={styles.signUpButton}>
                                        <Text style={styles.signUpText}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.signInContainer}>
                                    <Text>Already Sign Up?</Text>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('SignIn')}
                                    >
                                        <Text style={styles.signInText}>Sign In</Text>
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
    signUpButton: {
        marginTop: 10, 
        backgroundColor: globalColors.secondary, 
        padding: 10, 
        borderRadius: 20
    },
    signUpText: {
        fontWeight: 'bold', 
        color: globalColors.white, 
        fontSize: 18, 
        textAlign: 'center'
    },
    signInContainer: {
        marginTop: 30, 
        alignItems: 'flex-end'
    },
    signInText: {
        fontWeight: 'bold'
    }
});

export default SignUpScreen;