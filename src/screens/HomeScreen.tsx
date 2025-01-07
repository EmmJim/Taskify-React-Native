import React, { useEffect, useMemo, useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalColors } from '../../assets/styles/globalStyles';
import {LinearGradient} from 'expo-linear-gradient';
import Card from '../components/Card';
import { TaskItem, TaskStatuses } from '../types/types';
import TaskSelectionButton from '../components/TaskSelectionButton';
import ListCardItem from '../components/ListCardItem';

const HomeScreen = () => {
    const [tasks, setTasks] = useState<TaskItem[]>([]); // Estado para las tareas
    const [selectedTasks, setSelectedTasks] = useState<TaskStatuses>(TaskStatuses.allTasks);

    // Recuperar tareas desde AsyncStorage
    useEffect(() => {
        const loadTasks = async () => {
            try {
                const storedTasks = await AsyncStorage.getItem('tasks');
                if (storedTasks) {
                    setTasks(JSON.parse(storedTasks)); // Si hay tareas en AsyncStorage, las ponemos en el estado
                }
            } catch (error) {
                console.error('Error loading tasks from AsyncStorage:', error);
            }
        };

        loadTasks();
    }, []);

    // Memorizar las tareas filtradas para evitar recalcular en cada render
    const filteredTasks = useMemo(() => {
        if (selectedTasks === TaskStatuses.allTasks) {
            return tasks;
        } else if (selectedTasks === TaskStatuses.InProgress) {
            return tasks.filter(task => task.status === 1);
        } else if (selectedTasks === TaskStatuses.Completed) {
            return tasks.filter(task => task.status === 2);
        }
        return [];
    }, [selectedTasks, tasks]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.centerContent} showsVerticalScrollIndicator={false}>
                <Header iconColor={globalColors.secondary} />
                {/* Greeting */}
                <View style={styles.greetingContainer}>
                    <Text style={styles.greeting}>Hello Emmanuel!</Text>
                    <Text style={styles.subtitle}>Have a nice day.</Text>
                </View>
                {/* Botones */}
                <View style={styles.buttonContainer}>
                    <TaskSelectionButton title="My Tasks" statusTask={TaskStatuses.allTasks} selectedTasks={selectedTasks} onPress={setSelectedTasks}/>
                    <TaskSelectionButton title="In-progress" statusTask={TaskStatuses.InProgress} selectedTasks={selectedTasks} onPress={setSelectedTasks}/>
                    <TaskSelectionButton title="Completed" statusTask={TaskStatuses.Completed} selectedTasks={selectedTasks} onPress={setSelectedTasks}/>
                </View>

                {/* Cards */}
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.name + Date.now().toString()} // Usar id como clave única
                    data={filteredTasks}
                    renderItem={({ item }) => <Card item={item} />}
                />
                
                {/* Section Progress */}
                <Text style={styles.subheader}>Upcoming deadlines</Text>
                <View style={styles.listCardsContainer}>
                    <ListCardItem title="Back-end development" date="October 11"/>
                    <ListCardItem title="Devops development" date="October 22"/>
                    <ListCardItem title="Front-end development" date="November 1"/>
                </View>
            </ScrollView>
            <StatusBar barStyle="dark-content" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColors.primary,
        alignItems: 'center',
    },
    centerContent: {
        width: '90%'
    },
    greetingContainer: {
        alignSelf: 'flex-start',
        maxWidth: '80%',
        marginVertical: 40
    },  
    greeting: {
        fontSize: 38,
        fontWeight: 'bold',
        color: globalColors.secondary
    },
    subheader: {
        fontSize: 23,
        fontWeight: 'bold',
        color: globalColors.secondary
    },
    subtitle: {
        color: globalColors.lightGray
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    button: {
        backgroundColor: globalColors.gray,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    buttonActive: {
        backgroundColor: globalColors.white,
    },
    buttonText: {
        fontWeight: 'bold'
    },
    cardContainer: {
        marginVertical: 30,
        gap: 10
    },
    card: {
        backgroundColor: globalColors.purple,
        borderRadius: 20,
        padding: 15,
        marginRight: 15,
        width: 240,
        height: 240,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
        justifyContent: 'space-around'
    },
    listCardsContainer: {marginVertical: 20, gap: 10}
})

export default HomeScreen