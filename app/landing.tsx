import { BACKGROUND_GRAY } from "@/constants/colors";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    const router = useRouter();
    return (
        <TouchableOpacity style={styles.container} onPress={() => { router.push('/(tabs)') }}>
            <View style={styles.container}>
                <Text style={styles.titleText}>Welcome</Text>
                <Text style={styles.basicText}>Tap anywhere to get started</Text>
            </View>
        </TouchableOpacity>
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
    }
})