import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Button} from 'react-native'
import Header from '../components/Header'
import { globalColors } from '../../assets/styles/globalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTask = () => {

    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<Boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date>(date);
    const [taskStatus, setTaskStatus] = useState<Number>(1);

    const onChange = (event, selectedDate) => {
        setShow(false); // Ocultar el picker cuando se hace una selección
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setSelectedDate(currentDate); // Actualizar la fecha seleccionada
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
                                    <TextInput style={{borderBottomColor: 'white', borderBottomWidth: 0.2, padding: 10, color: globalColors.white}}/>
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
                                    <TextInput style={{borderBottomColor: globalColors.secondary, borderBottomWidth: 0.2, padding: 10, color: globalColors.secondary}}/>
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
                        </View>
                        
                    </View>
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