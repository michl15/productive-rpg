import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label: string;
    onPress?: () => void;
    variant?: string;
}

export default function Button({ label, onPress }: Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        borderColor: "#70cbff",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        margin: 10,
    },
    button: {
        flexDirection: 'row',
    },
    buttonText: {
        color: "#70cbff",
        fontSize: 20
    },
});