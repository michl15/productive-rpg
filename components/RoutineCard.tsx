import { LIGHT_BLUE } from "@/constants/colors"
import { Routine } from "@/constants/types"
import { useRouter } from "expo-router"
import { Pressable, StyleSheet, Text, View } from "react-native"

type Props = {
    routine: Routine,
    index: number
}

export default function RoutineCard({ routine, index }: Props) {
    const router = useRouter();

    const onLongPress = () => {
        router.replace(`/(tabs)/(routines)/edit/${routine.id}`)
    }
    return (
        <Pressable style={index === 0 ? styles.firstContainer : styles.container} onLongPress={onLongPress}>
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