import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView, StatusBar} from 'react-native'
import Header from '../components/Header'
import { globalColors } from '../../assets/styles/globalStyles'

const AddTask = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{width: '90%'}}>
                <Header iconColor={globalColors.white}/>
            </View>
            <View style={styles.centerContent}>
                
                <View style={{backgroundColor: globalColors.secondary, height: '50%'}}>
                    <View style={{width: '90%', paddingVertical: 30, paddingHorizontal: 30}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24, textAlign: 'center', marginBottom: 30}}>Create a Task</Text>
                        <View style={{marginVertical: 10}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>Name</Text>
                            <TextInput style={{borderBottomColor: 'white', borderBottomWidth: 0.2, padding: 10, color: globalColors.white}}/>
                        </View>
                        <View style={{marginVertical: 10}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>Date</Text>
                            <TextInput style={{borderBottomColor: 'white', borderBottomWidth: 0.2, padding: 10, color: globalColors.white}}/>
                        </View>
                        <View style={{marginVertical: 10}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>Project Name</Text>
                            <TextInput style={{borderBottomColor: 'white', borderBottomWidth: 0.2, padding: 10, color: globalColors.white}}/>
                        </View>
                        <View style={{marginVertical: 10}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>Status</Text>
                            <TextInput style={{borderBottomColor: 'white', borderBottomWidth: 0.2, padding: 10, color: globalColors.white}}/>
                        </View>
                        
                    </View>
                </View>
                
                <View style={{backgroundColor: 'white', height: '50%', borderTopEndRadius: 50, borderTopStartRadius: 50, padding: 50}}>

                </View>
                
                <StatusBar barStyle="light-content" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColors.secondary,
        alignItems: 'center',
    },
    centerContent: {
        width: '100%'
    },
})

export default AddTask