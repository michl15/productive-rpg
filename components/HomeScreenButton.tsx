import { LIGHT_BLUE } from '@/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label: string;
    onPress?: () => void;
}

export default function HomeScreenButton({ label, onPress }: Props) {
    return (
        <Pressable onPress={onPress} style={styles.buttonContainer}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{label}</Text>
                <Ionicons name="chevron-forward-circle-outline" size={24} color={LIGHT_BLUE} style={styles.buttonIcon} />
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        borderColor: LIGHT_BLUE,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: "90%",
        marginVertical: 10,
    },
    button: {
        flexDirection: 'row',
    },
    buttonText: {
        color: LIGHT_BLUE,
        fontSize: 20
    },
    buttonIcon: {
        marginLeft: "auto"
    }
});