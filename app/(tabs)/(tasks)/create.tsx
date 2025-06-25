import Button from "@/components/Button";
import ConfirmationModal from "@/components/ConfirmationModal";
import PriorityPicker from "@/components/PriorityPicker";
import { LIGHT_BLUE, RED } from "@/constants/colors";
import { coreStyles } from "@/constants/styles";
import { Task } from "@/constants/types";
import { addTask, removeTask } from "@/redux/tasksReducer";
import { randomId } from "@/util/asyncStorage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

type Props = {
    task?: Task
}

export default function Create({ task }: Props) {
    const [taskName, setTaskName] = useState(task?.name || "");
    const [priority, setPriority] = useState(task?.priority !== undefined ? task.priority : 1);
    const [validInput, setValidInput] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const nameRef = useRef<TextInput>(null);
    const dispatch = useDispatch();
    const router = useRouter();

    const priorities = ["Low", "Medium", "High"];

    const onCancel = () => {
        router.replace("/(tabs)/(tasks)");
    }

    const onSubmit = async () => {
        if (!taskName.trim()) {
            setValidInput(false);
            setTaskName("");
        } else {
            const newTask = {
                name: taskName,
                priority: priority,
                id: task?.id || randomId(),
                selected: false,
            }
            dispatch(addTask(newTask));
            router.replace("/(tabs)/(tasks)");
        }
    }

    const addButtonContent = () => {
        return task ? "Update" : "Add Task"
    }

    const onPressDelete = () => {
        setModalVisible(true);
    }

    const onDelete = () => {
        if (task) {
            dispatch(removeTask(task.id));
            router.replace("/(tabs)/(tasks)");
            setModalVisible(false);
        }
    }

    useFocusEffect(
        useCallback(() => {
            if (nameRef.current && !task) {
                nameRef.current.focus();
            }
        }, [task])
    )

    return (
        <>
            <View style={coreStyles.container}>
                <Text style={coreStyles.titleText}>{
                    task ? "Update task" : "Create a task"
                }</Text>
                <TouchableOpacity style={styles.labelContainer}>
                    <Text style={styles.labelText}>Name</Text>
                </TouchableOpacity>
                <TextInput
                    value={taskName}
                    onChangeText={(text) => {
                        setTaskName(text);
                        setValidInput(true);
                    }}
                    style={{
                        ...styles.input,
                        borderColor: validInput ? LIGHT_BLUE : RED
                    }}
                    placeholder="Enter a name for your task"
                    maxLength={30}
                    ref={nameRef}
                />
                {!validInput && <Text style={styles.invalidText}>Please enter a name for your task</Text>}

                <TouchableOpacity style={styles.labelContainer}>
                    <Text style={styles.labelText}>Priority</Text>
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
                    <Button label="Cancel" onPress={onCancel} variant="secondary" />
                    <Button label={addButtonContent()} onPress={onSubmit} />
                </View>
            </View>
            {
                task && <View style={styles.deleteButtonContainer}>
                    <Button label="Delete" onPress={onPressDelete} variant="error" Icon={Ionicons} iconName="trash" size="small" />
                </View>
            }
            <ConfirmationModal
                onCancel={() => setModalVisible(false)}
                onConfirm={onDelete}
                visible={modalVisible}
                message="Are you sure you want to delete this task?"
                header="Delete Task"
            />

        </>
    );
}

const styles = StyleSheet.create({
    labelContainer: {
        justifyContent: "flex-end"
    },
    labelText: {
        color: '#fff',
        marginRight: "auto",
        fontSize: 20
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
    },
    deleteButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    }
})