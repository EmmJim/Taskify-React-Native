import React from 'react'
import { Text, View, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { globalColors } from '../../assets/styles/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';

const TaskVisualizerScreen = ({navigation, route}) => {
    const item = route.params;
    console.log(item)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.centerContent} showsVerticalScrollIndicator={false}>
                
                <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{textAlign: 'center', color: globalColors.secondary, fontWeight: 'bold', fontSize: 20}}>Task Details</Text>

                <View style={{backgroundColor: 'white', marginTop: 50, padding: 20, borderRadius: 20}}>    
                    <View style={{rowGap: 20}}>
                        <Text style={{color: globalColors.lightGray, fontWeight: 'bold'}}>Task Title</Text>
                        <Text style={{color: globalColors.secondary, fontWeight: 500}}>{item.name}</Text>

                        <Text style={{color: globalColors.lightGray, fontWeight: 'bold'}}>Due Date:</Text>
                        <Text style={{color: globalColors.secondary, fontWeight: 500}}>{item.date ? new Date(item.date).toDateString() : null}</Text>

                        <Text style={{color: globalColors.lightGray, fontWeight: 'bold'}}>Description:</Text>
                        <Text style={{color: globalColors.secondary, fontWeight: 500}}>{item.description}</Text>

                        <Text style={{color: globalColors.lightGray, fontWeight: 'bold'}}>Status:</Text>
                        <View style={{backgroundColor: '#e7f5ef', padding: 5, borderRadius: 10, width: '50%', alignItems: 'center'}}>
                            <Text style={{color: '#0b9b5b'}}>{item.status == 1 ? 'On Progress' : item.status == 2 ? 'Completed' : null}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
            flex: 1,
            backgroundColor: globalColors.primary,
            alignItems: 'center',
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
        centerContent: {
            width: '90%'
        },
});

export default TaskVisualizerScreen