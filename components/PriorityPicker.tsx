import { LIGHT_BLUE } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    labels: string[];
    onIncrement: () => void;
    onDecrement: () => void;
    incDisabled?: boolean;
    decDisabled?: boolean;
    selected: number;
}

export default function PriorityPicker({ labels, onDecrement, onIncrement, incDisabled, decDisabled, selected }: Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onDecrement} disabled={decDisabled} >
                <Ionicons
                    name="arrow-down"
                    color={decDisabled ? "#d3e0e8" : "#70cbff"}
                    size={25}
                    style={styles.arrowButton} />
            </Pressable>
            <Text style={styles.labelText}>{labels[selected]}</Text>
            <Pressable onPress={onIncrement} disabled={incDisabled}>
                <Ionicons
                    name="arrow-up"
                    color={incDisabled ? "#d3e0e8" : "#70cbff"}
                    size={25}
                    style={styles.arrowButton} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: LIGHT_BLUE,
        marginVertical: 10,
        borderRadius: 10
    },
    labelText: {
        color: "#fff",
        fontSize: 20,
        width: 130,
        textAlign: "center",
        borderRightColor: LIGHT_BLUE,
        borderRightWidth: 1,
        borderLeftColor: LIGHT_BLUE,
        borderLeftWidth: 1,
        padding: 5
    },
    arrowButton: {
        padding: 5
    }
});