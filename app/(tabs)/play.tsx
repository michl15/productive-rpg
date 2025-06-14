import { BACKGROUND_GRAY } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

export default function Play() {
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.titleText}>GAMER TIME</Text>
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
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
})