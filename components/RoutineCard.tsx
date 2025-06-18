import { LIGHT_BLUE } from "@/constants/colors"
import { Routine } from "@/constants/types"
import { Pressable, StyleSheet, Text, View } from "react-native"

type Props = {
    routine: Routine,
    index: number
}

export default function RoutineCard({ routine, index }: Props) {
    return (
        <Pressable style={index === 0 ? styles.firstContainer : styles.container}>
            <View>
                <Text style={styles.basicText}>{routine.name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    basicText: {
        color: "#fff",
    },
    container: {
        padding: 10,
        borderTopColor: LIGHT_BLUE,
        borderTopWidth: 1,
        width: "100%"
    },
    firstContainer: {
        padding: 10,
        width: "100%"
    }
})