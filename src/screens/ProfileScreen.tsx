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
                <View style={{alignItems: 'center', marginVertical: 30}}>
                    <Image 
                        style={{ height: 100, width: 100, borderRadius: 100}} 
                        source={{
                            uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
                        }}
                    />
                    <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 18}}>Emmanuel Jimenez</Text>
                    <Text style={{fontWeight: 'light', fontSize: 13, color: globalColors.lightGray}}>Mobile Developer</Text>
                </View>
                {/* FORM */}
                <View style={{marginVertical: 20}}>
                    <View style={{marginVertical: 10}}>
                        <Text style={{fontWeight: 'bold', marginBottom: 10}}>Your Email: </Text>
                        <TextInput 
                            style={{borderWidth: 0.7, borderColor: globalColors.secondary, borderRadius: 10, padding: 10}}
                            placeholder='xxx@gmail.com'
                        />
                    </View>
                    <View style={{marginVertical: 10}}>
                        <Text style={{fontWeight: 'bold', marginBottom: 10}}>Phone Number: </Text>
                        <TextInput 
                            style={{borderWidth: 0.7, borderColor: globalColors.secondary, borderRadius: 10, padding: 10}}
                            placeholder='+93123135'
                        />
                    </View>
                    <View style={{marginVertical: 10}}>
                        <Text style={{fontWeight: 'bold', marginBottom: 10}}>Website: </Text>
                        <TextInput 
                            style={{borderWidth: 0.7, borderColor: globalColors.secondary, borderRadius: 10, padding: 10}}
                            placeholder='www.gfx.com'
                        />
                    </View>
                    <View style={{marginVertical: 10}}>
                        <Text style={{fontWeight: 'bold', marginBottom: 10}}>Password: </Text>
                        <TextInput 
                            style={{borderWidth: 0.7, borderColor: globalColors.secondary, borderRadius: 10, padding: 10}}
                            placeholder='xxx.gmail.com'
                        />
                    </View>

                    {/* Logout Button */}
                    <TouchableOpacity style={{borderWidth: 1, borderColor: globalColors.purple, borderRadius: 10, padding: 10, marginTop: 40}}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold', color: globalColors.purple}}>Logout</Text>
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
})

export default ProfileScreen