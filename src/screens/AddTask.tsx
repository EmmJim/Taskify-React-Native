import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Button} from 'react-native'
import Header from '../components/Header'
import { globalColors } from '../../assets/styles/globalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from '../components/SnackBar';

const AddTask = () => {
    const [form, setForm] = useState({
        name: '',
        projectName: '',
        description: '',
        status: 1,
        date: new Date()
    })
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date>(date);
    const [taskStatus, setTaskStatus] = useState<number>(1);

    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const showSnackbar = () => {
        setSnackbarVisible(true);
    };

    const onChange = (event, selectedDate) => {
        setShow(false); // Ocultar el picker cuando se hace una selección
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setSelectedDate(currentDate); // Actualizar la fecha seleccionadas
        setForm({
            ...form,
            date: currentDate
        })
    };

    const onChangeTextField = (event, field) => {
        console.log(event, field);
        setForm({
            ...form,
            [field]: event
        })
    }

    const onSubmit = () => {
        setForm({
            ...form,
            status: taskStatus
        })
        console.log(form);
        saveTasksToStorage(form)
        showSnackbar()
        setForm({
            name: '',
            projectName: '',
            description: '',
            status: 1,
            date: new Date()
        })
        setTaskStatus(1);
        setSelectedDate(new Date());
    }

    const saveTasksToStorage = async (newTask: any) => {
        try {
            // Obtener las tareas existentes desde AsyncStorage
            const existingTasks = await AsyncStorage.getItem('tasks');
            
            // Verificar si existingTasks es un JSON válido
            let tasksArray: any[] = [];
            if (existingTasks) {
                try {
                    tasksArray = JSON.parse(existingTasks);
                    
                    // Validar que tasksArray sea un arreglo
                    if (!Array.isArray(tasksArray)) {
                        throw new Error('El contenido de AsyncStorage no es un array válido.');
                    }
                } catch (error) {
                    console.error('Error al analizar JSON existente:', error);
                    tasksArray = [];
                }
            }
    
            // Añadir la nueva tarea
            tasksArray.push(newTask);
    
            // Guardar el array actualizado en AsyncStorage
            await AsyncStorage.setItem('tasks', JSON.stringify(tasksArray));
            console.log('Task added to AsyncStorage:', newTask);
        } catch (error) {
            console.error('Error saving tasks to AsyncStorage:', error);
        }
    };
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.keyboardView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <SafeAreaView style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Header iconColor={globalColors.white}/>
                    </View>
                    <View style={styles.centerContent}>
                        <Text style={styles.title}>Create a Task</Text>
                        
                        <View style={styles.firstContainer}>
                            <View style={styles.firstContainerSpacing}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.inputLabel}>Name</Text>
                                    <TextInput 
                                        style={styles.inputText} 
                                        onChangeText={(event) => onChangeTextField(event, 'name')} 
                                        value={form.name}
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={{...styles.inputLabel, marginBottom: 10}}>Date</Text>
                                    <View style={styles.dateContainer}>
                                        <Text style={styles.inputDateText}>{selectedDate.toDateString()}</Text>
                                        <TouchableOpacity onPress={() => setShow(true)} style={styles.dateButton} >
                                            <Text style={styles.dateText}>Pick a Date</Text>
                                            {show && (
                                                <DateTimePicker
                                                    value={date}
                                                    mode="date"
                                                    display="default"
                                                    onChange={onChange}
                                                />
                                            )}
                                        </TouchableOpacity>
            
                                        
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                        
                        <View style={styles.secondContainer}>
                            <View style={styles.secondContainerSpacing}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.secondInputLabel}>Project Name</Text>
                                    <TextInput 
                                        style={styles.secondInputText} 
                                        onChangeText={(event) => onChangeTextField(event, 'projectName')}
                                        value={form.projectName}
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.secondInputLabel}>Description</Text>
                                    <TextInput 
                                        style={styles.secondInputText} 
                                        multiline 
                                        numberOfLines={3}
                                        returnKeyType="done"
                                        blurOnSubmit={true}
                                        onSubmitEditing={Keyboard.dismiss}
                                        onChangeText={(event) => onChangeTextField(event, 'description')}
                                        value={form.description}
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={{...styles.secondInputLabel, marginBottom: 20}}>Status</Text>
                                    <View style={styles.statusButtonsContainer}>
                                        <TouchableOpacity 
                                            style={{...styles.statusButton, backgroundColor: taskStatus === 1 ? globalColors.purple : globalColors.secondary}}
                                            onPress={() => setTaskStatus(1)}
                                        >
                                            <Text style={styles.statusButtonText}>Not Started</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            style={{...styles.statusButton, backgroundColor: taskStatus === 2 ? globalColors.purple : globalColors.secondary}}
                                            onPress={() => setTaskStatus(2)}
                                        >
                                            <Text style={styles.statusButtonText}>In-progress</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            style={{...styles.statusButton, backgroundColor: taskStatus === 3 ? globalColors.purple : globalColors.secondary}}
                                            onPress={() => setTaskStatus(3)}
                                        >
                                            <Text style={styles.statusButtonText}>Completed</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <Snackbar
                        message="Task added succesfully!"
                        visible={snackbarVisible}
                        onDismiss={() => setSnackbarVisible(false)}
                    />
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
        width: '100%'
    },
    headerContainer: {width: '90%'},
    title: {color: 'white', fontWeight: 'bold', fontSize: 24, textAlign: 'center'},
    firstContainer: {backgroundColor: globalColors.secondary, height: '40%', justifyContent: 'center', alignItems: 'center'},
    firstContainerSpacing: {width: '90%', paddingVertical: 30, paddingHorizontal: 10},
    inputContainer: {marginVertical: 10},
    inputLabel: {color: 'white', fontWeight: 'bold', fontSize: 16},
    inputText: {borderBottomColor: 'white', borderBottomWidth: 0.2, padding: 10, color: globalColors.white},
    dateContainer: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
    inputDateText: {color: 'white', fontSize: 13},
    dateButton: {backgroundColor: globalColors.white, padding: 8, borderRadius: 15, alignItems: 'center'},
    dateText: {color: globalColors.secondary},
    secondContainer: {backgroundColor: globalColors.white, height: '60%', borderTopEndRadius: 50, borderTopStartRadius: 50, alignItems: 'center'},
    secondContainerSpacing: {width: '90%', paddingVertical: 30, paddingHorizontal: 10},
    secondInputLabel: {color: globalColors.lightGray, fontWeight: 'bold', fontSize: 16},
    secondInputText: {borderBottomColor: globalColors.secondary, borderBottomWidth: 0.2, padding: 10, color: globalColors.secondary},
    statusButtonsContainer: {flexDirection: 'row', gap: 10},
    statusButton: {padding: 15, borderRadius: 30},
    statusButtonText: {color: globalColors.white, fontWeight: 'bold', fontSize: 12},
    submitButton: {backgroundColor: globalColors.secondary, width: '90%', height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center'},
    submitButtonText: {color: 'white', fontWeight: 'bold', fontSize: 18},
})

export default AddTask