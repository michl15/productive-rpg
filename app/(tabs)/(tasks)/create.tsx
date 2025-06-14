import Button from "@/components/Button";
import PriorityPicker from "@/components/PriorityPicker";
import { BACKGROUND_GRAY, LIGHT_BLUE, RED } from "@/constants/colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Create() {
    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState(1);
    const [validInput, setValidInput] = useState(true);

    const router = useRouter();

    const priorities = ["Low", "Medium", "High"];

    const resetState = () => {
        setTaskName("");
        setPriority(1);
    }

    const onCancel = () => {
        resetState();
        router.push("/(tabs)/(tasks)");
    }

    const onSubmit = async () => {
        if (!taskName) {
            setValidInput(false);
        } else {
            try {
                const taskList = await AsyncStorage.getItem("tasks");
                let tasks = []
                if (taskList) {
                    tasks = JSON.parse(taskList);
                }

                const newTask = {
                    name: taskName,
                    priority: priority
                }
                tasks.push(newTask);
                console.log(tasks);
                await AsyncStorage.setItem("tasks", JSON.stringify(tasks));

                resetState();
                router.push("/(tabs)/(tasks)")
            } catch (e) {
                console.error(e)
            }
        }
    }

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.titleText}>Create a task</Text>
            <TouchableOpacity style={styles.labelContainer}>
                <Text style={styles.labelText}>Name*</Text>
            </TouchableOpacity>
            <TextInput
                value={taskName}
                onChangeText={(text) => {
                    setTaskName(text);
                    setValidInput(true);
                }}
                style={{
                    ...styles.input,
                    borderColor: validInput ? "#70cbff" : "#fb2c36"
                }}
                placeholder="Enter a name for your task"
                maxLength={30}
            />
            {!validInput && <Text style={styles.invalidText}>Please enter a name for your task</Text>}

            <TouchableOpacity style={styles.labelContainer}>
                <Text style={styles.labelText}>Priority*</Text>
            </TouchableOpacity>
            <PriorityPicker
                labels={priorities}
                selected={priority}
                onIncrement={() => {
                    setPriority(priority + 1)
                }}
                onDecrement={() => {
                    setPriority(priority - 1)
                }}
                incDisabled={priority === 2}
                decDisabled={priority === 0}
            />

            <View style={styles.buttonsContainer}>
                <Button label="Cancel" onPress={onCancel} />
                <Button label="Add Task" onPress={onSubmit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_GRAY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 30,
        color: '#fff',
        paddingBottom: 20
    },
    basicText: {
        color: '#fff'
    },
    labelContainer: {
        justifyContent: "flex-end"
    },
    labelText: {
        color: '#fff',
        marginRight: "auto"
    },
    input: {
        width: "90%",
        margin: 12,
        borderWidth: 2,
        borderColor: LIGHT_BLUE,
        borderRadius: 10,
        padding: 10,
        color: "#fff"
    },
    pickerContainer: {
        height: 50
    },
    picker: {
        height: 10,
        width: 200,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    invalidText: {
        width: "90%",
        color: RED,
        marginBottom: 10,
        marginLeft: 5,
        marginTop: -5
    }
})