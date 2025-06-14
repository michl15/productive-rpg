import { LIGHT_BLUE } from '@/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label: string;
    onPress?: () => void;
}

export default function HomeScreenButton({ label, onPress }: Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{label}</Text>
                <Ionicons name="chevron-forward-circle-outline" size={24} color={LIGHT_BLUE} style={styles.buttonIcon} />
            </Pressable>
        </View>
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