import React from 'react'
import { Text, View, StyleSheet, ScrollView, Platform, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { globalColors } from '../../assets/styles/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TaskVisualizerScreen = ({navigation, route}) => {
    const item = route.params;
    console.log(item)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.centerContent} showsVerticalScrollIndicator={false}>
                
                <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={globalColors.white} />
                </TouchableOpacity>
                <Text style={{textAlign: 'center', color: globalColors.white, fontWeight: 'bold', fontSize: 20}}>Task Details</Text>

                <View style={{backgroundColor: 'white', marginTop: 50, padding: 20, borderRadius: 20}}>    
                    <View style={{rowGap: 20}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: globalColors.lightGray, fontWeight: 'bold', fontSize: 16}}>Task Title</Text>
                            <TouchableOpacity>
                                <FontAwesome name="edit" size={26} color={globalColors.secondary} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{color: globalColors.secondary, fontWeight: 500, fontSize: 25}}>{item.name}</Text>

                        <Text style={{color: globalColors.lightGray, fontWeight: 'bold', fontSize: 16}}>Due Date</Text>
                        <Text style={{color: globalColors.secondary, fontWeight: 500, fontSize: 16}}>{item.date ? new Date(item.date).toDateString() : null}</Text>


                        <Text style={{color: globalColors.lightGray, fontWeight: 'bold', fontSize: 16}}>Status</Text>
                        <View style={{backgroundColor: '#e7f5ef', padding: 5, borderRadius: 10, width: '50%', alignItems: 'center'}}>
                            <Text style={{color: '#0b9b5b', fontSize: 16}}>{item.status == 1 ? 'On Progress' : item.status == 2 ? 'Completed' : null}</Text>
                        </View>

                        <Text style={{color: globalColors.lightGray, fontWeight: 'bold', fontSize: 16}}>Description</Text>
                        <Text style={{color: globalColors.secondary, fontWeight: 500, fontSize: 16}}>{item.description}</Text>

                        <Text style={{color: globalColors.lightGray, fontWeight: 'bold', fontSize: 16}}>Stages of Task</Text>
                        <View style={{backgroundColor: '#F9F9FB', padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', gap: 10}}>
                            <Ionicons name="checkmark-circle" size={24} color={globalColors.secondary} />
                            <Text style={{color: globalColors.secondary, fontSize: 16}}>User Research & Analysis</Text>
                        </View>
                        <View style={{backgroundColor: '#F9F9FB', padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', gap: 10}}>
                            <Ionicons name="checkmark-circle" size={24} color={globalColors.secondary} />
                            <Text style={{color: globalColors.secondary, fontSize: 16}}>Black & White Wireframe</Text>
                        </View>
                        <View style={{backgroundColor: '#F9F9FB', padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', gap: 10}}>
                            <Entypo name="circle" size={22} color={globalColors.secondary} />
                            <Text style={{color: globalColors.secondary, fontSize: 16}}>Design on Figma</Text>
                        </View>
                        <View style={{backgroundColor: '#F9F9FB', padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', gap: 10}}>
                            <Entypo name="circle" size={22} color={globalColors.secondary} />
                            <Text style={{color: globalColors.secondary, fontSize: 16}}>Presentation on Google Slide</Text>
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
            backgroundColor: globalColors.secondary,
            alignItems: 'center',
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
        centerContent: {
            width: '90%'
        },
});

export default TaskVisualizerScreen