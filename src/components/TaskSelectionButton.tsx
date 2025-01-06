import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { TaskStatuses } from '../types/types'
import { globalColors } from '../../assets/styles/globalStyles'

interface TaskSelectionButtonProps {
    title: String,
    statusTask: TaskStatuses,
    selectedTasks: TaskStatuses,
    onPress: (statusTask: TaskStatuses) => void
}

const TaskSelectionButton: React.FC<TaskSelectionButtonProps> = ({title, statusTask, selectedTasks, onPress}) => {
    return (
        <TouchableOpacity 
            style={{
            ...styles.button,
            ...(selectedTasks === statusTask ? styles.buttonActive : {}),
            }} 
            onPress={() => onPress(statusTask)}
        >
            <Text style={selectedTasks === statusTask ? styles.buttonText : {}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
})

export default TaskSelectionButton