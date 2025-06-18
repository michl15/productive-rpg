import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import RoutineList from "@/components/RoutineList";
import { BACKGROUND_GRAY } from "@/constants/colors";
import { Routine } from "@/constants/types";
import { RootState } from "@/redux/store";
import { getRoutinesByDay } from "@/util/routinesUtil";
import { formatRoutineDay } from "@/util/timeUtil";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Routines() {
    const [todaysRoutines, setTodaysRoutines] = useState<Routine[]>([]);

    const today = useMemo(() => new Date(), []);
    const { routines } = useSelector((state: RootState) => state.routinesReducer)

    const router = useRouter();
    const onCreatePress = () => {
        router.push("/(tabs)/(routines)/create");
    }

    useEffect(() => {
        setTodaysRoutines(getRoutinesByDay(routines, today.getDay()));
    }, [routines, today]);

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
            >
                <Text style={styles.titleText}>Routines</Text>
                <Button
                    label="Add a Routine"
                    onPress={onCreatePress}
                    Icon={Ionicons}
                    iconName="add-circle-outline" />
                <Text style={styles.subtitleText}>Today&apos;s Routines</Text>

                <View style={styles.accordionContainer}>
                    <Accordion>
                        <Accordion.Item startOpen header={formatRoutineDay(today)} body={
                            <RoutineList routines={todaysRoutines} />
                        } />
                    </Accordion>
                </View>
                <Text style={styles.subtitleText}>All Routines</Text>
                <View style={styles.accordionContainer}>
                    <Accordion>
                        <Accordion.Item header="Sunday" body={
                            <RoutineList routines={getRoutinesByDay(routines, 0)} />
                        } />
                        <Accordion.Item header="Monday" body={
                            <RoutineList routines={getRoutinesByDay(routines, 1)} />
                        } />
                        <Accordion.Item header="Tuesday" body={
                            <RoutineList routines={getRoutinesByDay(routines, 2)} />
                        } />
                        <Accordion.Item header="Wednesday" body={
                            <RoutineList routines={getRoutinesByDay(routines, 3)} />
                        } />
                        <Accordion.Item header="Thursday" body={
                            <RoutineList routines={getRoutinesByDay(routines, 4)} />
                        } />
                        <Accordion.Item header="Friday" body={
                            <RoutineList routines={getRoutinesByDay(routines, 5)} />
                        } />
                        <Accordion.Item header="Saturday" body={
                            <RoutineList routines={getRoutinesByDay(routines, 6)} />
                        } />
                    </Accordion>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_GRAY,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
        paddingTop: 70
    },
    titleText: {
        fontSize: 30,
        color: '#fff',
        paddingBottom: 10
    },
    subtitleText: {
        fontSize: 20,
        color: '#fff',
    },
    basicText: {
        color: '#fff'
    },
    accordionContainer: {
        width: "100%",
        padding: 10
    }
})