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
                
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={globalColors.white} />
                </TouchableOpacity>
                <Text style={styles.title}>Task Details</Text>

                <View style={styles.cardContainer}>    
                    <View style={styles.cardGap}>
                        <View style={styles.cardTitleContainer}>
                            <Text style={styles.cardTitleText}>Task Title</Text>
                            <TouchableOpacity>
                                <FontAwesome name="edit" size={26} color={globalColors.secondary} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.taskName}>{item.name}</Text>

                        <Text style={styles.label}>Due Date</Text>
                        <Text style={styles.text}>{item.date ? new Date(item.date).toDateString() : null}</Text>


                        <Text style={styles.label}>Status</Text>
                        <View style={{backgroundColor: '#e7f5ef', padding: 5, borderRadius: 10, width: '50%', alignItems: 'center'}}>
                            <Text style={{color: '#0b9b5b', fontSize: 16}}>{item.status == 1 ? 'On Progress' : item.status == 2 ? 'Completed' : null}</Text>
                        </View>

                        <Text style={styles.label}>Description</Text>
                        <Text style={styles.text}>{item.description}</Text>

                        <Text style={styles.label}>Stages of Task</Text>
                        <View style={styles.stageContainer}>
                            <Ionicons name="checkmark-circle" size={24} color={globalColors.secondary} />
                            <Text style={styles.stageText}>User Research & Analysis</Text>
                        </View>
                        <View style={styles.stageContainer}>
                            <Ionicons name="checkmark-circle" size={24} color={globalColors.secondary} />
                            <Text style={styles.stageText}>Black & White Wireframe</Text>
                        </View>
                        <View style={styles.stageContainer}>
                            <Entypo name="circle" size={22} color={globalColors.secondary} />
                            <Text style={styles.stageText}>Design on Figma</Text>
                        </View>
                        <View style={styles.stageContainer}>
                            <Entypo name="circle" size={22} color={globalColors.secondary} />
                            <Text style={styles.stageText}>Presentation on Google Slide</Text>
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
    backButton: {
        marginTop: 20
    },
    title: {
        textAlign: 'center', 
        color: globalColors.white, 
        fontWeight: 'bold', fontSize: 20
    },
    cardContainer: {
        backgroundColor: 'white', 
        marginTop: 50, 
        padding: 20, 
        borderRadius: 20
    },
    cardGap: {rowGap: 20},
    cardTitleContainer: {flexDirection: 'row', justifyContent: 'space-between'},
    cardTitleText: {color: globalColors.lightGray, fontWeight: 'bold', fontSize: 16},
    taskName: {color: globalColors.secondary, fontWeight: 500, fontSize: 25},
    label: {color: globalColors.lightGray, fontWeight: 'bold', fontSize: 16},
    text: {color: globalColors.secondary, fontWeight: 500, fontSize: 16},
    stageContainer: {backgroundColor: '#F9F9FB', padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', gap: 10},
    stageText: {color: globalColors.secondary, fontSize: 16},
});

export default TaskVisualizerScreen