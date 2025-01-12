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
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <SafeAreaView style={styles.container}>
                    <View style={{width: '90%'}}>
                        <Header iconColor={globalColors.white}/>
                    </View>
                    <View style={styles.centerContent}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>Create a Task</Text>
                        
                        <View style={{backgroundColor: globalColors.secondary, height: '40%', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{width: '90%', paddingVertical: 30, paddingHorizontal: 10}}>
                                <View style={{marginVertical: 10}}>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Name</Text>
                                    <TextInput 
                                        style={{borderBottomColor: 'white', borderBottomWidth: 0.2, padding: 10, color: globalColors.white}} 
                                        onChangeText={(event) => onChangeTextField(event, 'name')} 
                                        value={form.name}
                                    />
                                </View>
                                <View style={{marginVertical: 10}}>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>Date</Text>
                                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                        <Text style={{color: 'white', fontSize: 13}}>{selectedDate.toDateString()}</Text>
                                        <TouchableOpacity onPress={() => setShow(true)} style={{backgroundColor: globalColors.white, padding: 8, borderRadius: 15, alignItems: 'center'}} >
                                            <Text style={{color: globalColors.secondary}}>Pick a Date</Text>
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
                        
                        <View style={{backgroundColor: globalColors.white, height: '60%', borderTopEndRadius: 50, borderTopStartRadius: 50, alignItems: 'center'}}>
                            <View style={{width: '90%', paddingVertical: 30, paddingHorizontal: 10}}>
                                <View style={{marginVertical: 10}}>
                                    <Text style={{color: globalColors.lightGray, fontWeight: 'bold', fontSize: 16}}>Project Name</Text>
                                    <TextInput 
                                        style={{borderBottomColor: globalColors.secondary, borderBottomWidth: 0.2, padding: 10, color: globalColors.secondary}} 
                                        onChangeText={(event) => onChangeTextField(event, 'projectName')}
                                        value={form.projectName}
                                    />
                                </View>
                                <View style={{marginVertical: 10}}>
                                    <Text style={{color: globalColors.lightGray, fontWeight: 'bold', fontSize: 16}}>Description</Text>
                                    <TextInput 
                                        style={{borderBottomColor: globalColors.secondary, borderBottomWidth: 0.2, padding: 10, color: globalColors.secondary}} 
                                        multiline 
                                        numberOfLines={3}
                                        returnKeyType="done"
                                        blurOnSubmit={true}
                                        onSubmitEditing={Keyboard.dismiss}
                                        onChangeText={(event) => onChangeTextField(event, 'description')}
                                        value={form.description}
                                    />
                                </View>
                                <View style={{marginVertical: 10}}>
                                    <Text style={{color: globalColors.lightGray, fontWeight: 'bold', fontSize: 16, marginBottom: 20}}>Status</Text>
                                    <View style={{flexDirection: 'row', gap: 10}}>
                                        <TouchableOpacity 
                                            style={{padding: 15, backgroundColor: taskStatus === 1 ? globalColors.purple : globalColors.secondary, borderRadius: 30}}
                                            onPress={() => setTaskStatus(1)}
                                        >
                                            <Text style={{color: globalColors.white, fontWeight: 'bold', fontSize: 12}}>Not Started</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            style={{padding: 15, backgroundColor: taskStatus === 2 ? globalColors.purple : globalColors.secondary, borderRadius: 30}}
                                            onPress={() => setTaskStatus(2)}
                                        >
                                            <Text style={{color: globalColors.white, fontWeight: 'bold', fontSize: 12}}>In-progress</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                            style={{padding: 15, backgroundColor: taskStatus === 3 ? globalColors.purple : globalColors.secondary, borderRadius: 30}}
                                            onPress={() => setTaskStatus(3)}
                                        >
                                            <Text style={{color: globalColors.white, fontWeight: 'bold', fontSize: 12}}>Completed</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity onPress={onSubmit} style={{backgroundColor: globalColors.secondary, width: '90%', height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Enviar</Text>
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
    container: {
        flex: 1,
        backgroundColor: globalColors.secondary,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    centerContent: {
        width: '100%'
    },
})

export default AddTask