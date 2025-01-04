import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalColors } from '../../assets/styles/globalStyles';
import {LinearGradient} from 'expo-linear-gradient';

enum TaskStatuses {
    InProgress = 1,
    Completed = 2,
    allTasks = 3
}

const HomeScreen = () => {
    const [tasks, setTasks] = useState<any[]>([]); // Estado para las tareas
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

    const inProgressTasks = tasks.filter((task) => task.status == 1 );
    const completedTasks = tasks.filter((task) => task.status == 2 );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.centerContent} showsVerticalScrollIndicator={false}>

                <Header />

                {/* Greeting */}

                <View style={styles.greetingContainer}>
                    <Text style={styles.greeting}>Hello Emmanuel!</Text>
                    <Text style={styles.subtitle}>Have a nice day.</Text>
                </View>

                {/* Botones */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={{
                        ...styles.button,
                        ...(selectedTasks === TaskStatuses.allTasks ? styles.buttonActive : {}),
                        }} 
                        onPress={() => setSelectedTasks(TaskStatuses.allTasks)}
                    >
                    <Text style={selectedTasks === TaskStatuses.allTasks ? styles.buttonText : {}}>My Tasks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                        ...styles.button,
                        ...(selectedTasks === TaskStatuses.InProgress ? styles.buttonActive : {}),
                        }} 
                        onPress={() => setSelectedTasks(TaskStatuses.InProgress)}
                    >
                    <Text style={selectedTasks === TaskStatuses.InProgress ? styles.buttonText : {}}>In-progress</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                        ...styles.button,
                        ...(selectedTasks === TaskStatuses.Completed ? styles.buttonActive : {}),
                        }} 
                        onPress={() => setSelectedTasks(TaskStatuses.Completed)}
                    >
                    <Text style={selectedTasks === TaskStatuses.Completed ? styles.buttonText : {}}>Completed</Text>
                    </TouchableOpacity>
                </View>

                {/* Cards */}
                {selectedTasks == TaskStatuses.allTasks ? (
                    <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(data) => data.name}
                    data={tasks}
                    renderItem={({item}) => (
                    <View style={styles.cardContainer}>
                        <LinearGradient 
                            colors={[globalColors.secondary, globalColors.secondaryPurple]} // Colores del gradiente (puedes cambiarlos)
                            style={styles.card} // Estilo de la tarjeta
                            start={{ x: 0, y: 0 }} // Dirección del gradiente
                            end={{ x: 1, y: 1 }}   // Dirección del gradiente
                        >
                            <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                                <Image style={{height: 30, width: 30}} source={{
                                    uri: 'https://cdn-icons-png.freepik.com/256/10969/10969233.png?semt=ais_hybrid'
                                }}></Image>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>{item.projectName}</Text>
                            </View>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>{item.name}</Text>
                            <Text style={{color: 'white'}}>October 20, 2020</Text>
                        </LinearGradient>
                    </View>
                    )}
                />
                ) : selectedTasks == TaskStatuses.InProgress ? (
                    <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(data) => data.name}
                    data={inProgressTasks}
                    renderItem={({item}) => (
                    <View style={styles.cardContainer}>
                        <View style={styles.card}>
                        <View style={{flexDirection: 'row', gap: 15}}>
                            <View style={{height: 30, width: 30, backgroundColor: 'red'}}></View>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>{item.projectName}</Text>
                        </View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>{item.name}</Text>
                        <Text style={{color: 'white'}}>October 20, 2020</Text>
                        </View>
                    </View>
                    )}
                />
                ) : (
                    <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(data) => data.name}
                    data={completedTasks}
                    renderItem={({item}) => (
                    <View style={styles.cardContainer}>
                        <View style={styles.card}>
                        <View style={{flexDirection: 'row', gap: 15}}>
                            <View style={{height: 30, width: 30, backgroundColor: 'red'}}></View>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>{item.projectName}</Text>
                        </View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>{item.name}</Text>
                        <Text style={{color: 'white'}}>October 20, 2020</Text>
                        </View>
                    </View>
                )}
                /> 
            )}

            <Text style={styles.subheader}>Progress</Text>
            
            </ScrollView>
            <StatusBar style="auto" />
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
    }
})

export default HomeScreen