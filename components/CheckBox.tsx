import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
    onCheck: () => void;
    value: boolean;
}

export default function CheckBox({ onCheck, value }: Props) {
    return (
        <View style={styles.box}>
            <Pressable onPress={() => { onCheck() }}>
                {value && <Ionicons name="checkmark" color="#fff" size={15} />}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 20,
        width: 20,
        borderColor: "#fff",
        borderWidth: 1,
        padding: 2,
        borderRadius: 5
    }
})