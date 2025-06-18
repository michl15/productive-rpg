import { Routine } from "@/constants/types"
import { StyleSheet, Text, View } from "react-native"
import RoutineCard from "./RoutineCard"

type Props = {
    routines: Routine[]
}

export default function RoutineList({ routines }: Props) {
    return (
        routines.length > 0 ? <View style={styles.viewContainer}>
            {routines.map((routine, index) => {
                return <RoutineCard key={`${routine.id}`} routine={routine} index={index} />
            })}
        </View> : <View>
            <Text style={styles.emptyText}>
                No routines yet!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 0,
    },
    viewContainer: {
        width: "100%"
    },
    emptyText: {
        color: "#fff",
        padding: 10
    }
})