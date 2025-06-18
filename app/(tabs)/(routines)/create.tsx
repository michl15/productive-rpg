import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import DayPicker from "@/components/DayPicker";
import { BACKGROUND_GRAY, LIGHT_BLUE, RED } from "@/constants/colors";
import { pickerOptions } from "@/constants/constants";
import { Routine } from "@/constants/types";
import { addRoutine } from "@/redux/routinesReducer";
import { randomId } from "@/util/asyncStorage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

type Props = {
    routine?: Routine;
}

export default function CreateRoutine({ routine }: Props) {
    const [routineName, setRoutineName] = useState("");
    const [validInput, setValidInput] = useState(true);
    const [validRoutine, setValidRoutine] = useState(true);
    const [selectedDays, setSelectedDays] = useState<number[]>([]);

    const router = useRouter();
    const dispatch = useDispatch();

    const onCancel = () => {
        router.back();
    }

    const onDaySelect = (index: number) => {
        setValidRoutine(true);
        if (selectedDays.includes(index)) {
            setSelectedDays(selectedDays.filter((day) => day !== index));
        } else {
            selectedDays.push(index);
            setSelectedDays([...selectedDays])
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

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Create a Routine
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
                <Button label="Create" onPress={onSubmit} />
            </View>
        </View>
    )
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
    }
})