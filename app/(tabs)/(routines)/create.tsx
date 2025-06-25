import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import ConfirmationModal from "@/components/ConfirmationModal";
import DayPicker from "@/components/DayPicker";
import { LIGHT_BLUE, RED } from "@/constants/colors";
import { pickerOptions } from "@/constants/constants";
import { coreStyles } from "@/constants/styles";
import { Routine } from "@/constants/types";
import { addRoutine, deleteRoutine } from "@/redux/routinesReducer";
import { randomId } from "@/util/asyncStorage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

type Props = {
    routine?: Routine | null;
}

export default function CreateRoutine({ routine }: Props) {
    const [routineName, setRoutineName] = useState(routine?.name || "");
    const [validInput, setValidInput] = useState(true);
    const [validRoutine, setValidRoutine] = useState(true);
    const [selectedDays, setSelectedDays] = useState<number[]>(routine?.days || []);
    const [modalVisible, setModalVisible] = useState(false);

    const router = useRouter();
    const dispatch = useDispatch();

    const onCancel = () => {
        router.replace("/(tabs)/(routines)");
    }

    const onDaySelect = (index: number) => {
        setValidRoutine(true);
        if (selectedDays.includes(index)) {
            setSelectedDays(selectedDays.filter((day) => day !== index));
        } else {
            setSelectedDays([...selectedDays, index])
        }
    }

    const onSelectAll = () => {
        setValidRoutine(true);
        if (selectedDays.length < 7) {
            setSelectedDays([0, 1, 2, 3, 4, 5, 6]);
        } else {
            setSelectedDays([]);
        }
    }

    const checkValidity = () => {
        let valid = true;
        if (!routineName.trim()) {
            setValidInput(false);
            setRoutineName("");
            valid = false;
        }
        if (selectedDays.length === 0) {
            setValidRoutine(false);
            valid = false;
        }
        return valid
    }

    const onSubmit = () => {
        if (checkValidity()) {
            const newRoutine: Routine = {
                name: routineName,
                id: routine ? routine.id : randomId(),
                days: selectedDays,
                daily: selectedDays.length === 7
            }
            dispatch(addRoutine(newRoutine));
            router.replace("/(tabs)/(routines)");
        }
    }

    const onPressDelete = () => {
        setModalVisible(true);
    }

    const onDelete = () => {
        if (routine) {
            dispatch(deleteRoutine(routine));
            router.replace("/(tabs)/(routines)");
            setModalVisible(false);

        }
    }

    return (
        <>
            <View style={coreStyles.container}>
                <Text style={coreStyles.titleText}>
                    {routine ? "Update Routine" : "Create a Routine"}
                </Text>
                <TouchableOpacity style={styles.labelContainer}>
                    <Text style={styles.labelText}>Name</Text>
                </TouchableOpacity>
                <TextInput
                    value={routineName}
                    onChangeText={(text) => {
                        setRoutineName(text);
                        setValidInput(true);
                    }}
                    style={{
                        ...styles.input,
                        borderColor: validInput ? LIGHT_BLUE : RED
                    }}
                    placeholder="Enter a name for your routine"
                    maxLength={30}
                />
                {!validInput && <Text style={styles.invalidText}>Please enter a name for your routine</Text>}

                <TouchableOpacity style={styles.labelContainer}>
                    <Text style={styles.labelText}>Schedule</Text>
                </TouchableOpacity>
                <View style={{ marginBottom: 10 }}>
                    <DayPicker onDaySelect={onDaySelect} highlighted={selectedDays} options={pickerOptions} valid={validRoutine} />
                </View>
                {!validRoutine && <Text style={styles.invalidText}>Please choose at least one day to repeat</Text>}

                <Pressable onPress={onSelectAll}>
                    <View style={styles.buttonsContainer}>
                        <CheckBox onCheck={onSelectAll} value={selectedDays.length === 7} />
                        <Text style={styles.dailyText}>Repeat Daily</Text>
                    </View>
                </Pressable>

                <View style={styles.buttonsContainer}>
                    <Button label="Cancel" onPress={onCancel} variant="secondary" />
                    <Button label={routine ? "Update" : "Create"} onPress={onSubmit} />
                </View>
            </View>
            {
                routine && <View style={styles.deleteButtonContainer}>
                    <Button label="Delete" onPress={onPressDelete} variant="error" Icon={Ionicons} iconName="trash" size="small" />
                </View>
            }

            <ConfirmationModal
                onCancel={() => setModalVisible(false)}
                onConfirm={onDelete}
                visible={modalVisible}
                message="Are you sure you want to delete this routine?"
                header="Delete Routine"
            />
        </>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    labelContainer: {
        justifyContent: "flex-end"
    },
    labelText: {
        color: '#fff',
        marginRight: "auto",
        fontSize: 20,
        marginBottom: 10
    },
    input: {
        width: "90%",
        margin: 12,
        marginTop: 0,
        borderWidth: 2,
        borderColor: LIGHT_BLUE,
        borderRadius: 10,
        padding: 10,
        color: "#fff"
    },
    invalidText: {
        width: "90%",
        color: RED,
        marginBottom: 10,
        marginLeft: 5,
        flexDirection: "row"
    },
    selectAll: {
        width: "90%",
    },
    dailyText: {
        color: "#fff",
        margin: 5
    },
    deleteButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    }
})