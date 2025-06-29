import { DARK_BLUE, LIGHT_BLUE } from '@/constants/colors';
import { updateStepsBank, updateTodaySteps } from '@/redux/currencyReducer';
import { RootState } from '@/redux/store';
import { updateDay } from '@/redux/timeReducer';
import { checkDate } from '@/util/timeUtil';
import { Pedometer } from 'expo-sensors';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function StepTracker() {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [pastStepCount, setPastStepCount] = useState(0);

    const { currDay } = useSelector((state: RootState) => state.timeReducer);
    const { stepsBank } = useSelector((state: RootState) => state.currencyReducer);

    const dispatch = useDispatch();

    const subscribe = async () => {
        setIsLoading(true);
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(isAvailable);

        if (isAvailable) {
            const end = new Date();
            const start = new Date(end);
            start.setHours(0, 0, 0, 0);
            const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
            const currDate = new Date(currDay);
            setPastStepCount(pastStepCountResult.steps);
            dispatch(updateTodaySteps(pastStepCountResult.steps));

            if (!checkDate(start, currDate)) {
                const yesterdaySteps = await Pedometer.getStepCountAsync(currDate, start);
                dispatch(updateStepsBank(stepsBank + yesterdaySteps.steps));
                dispatch(updateDay(start.toDateString()));
            }
        }
        setIsLoading(false);
    };

    useEffect(() => {
        subscribe();
        const interval = setInterval(() => {
            subscribe();
        }, 60000)
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getStepsDisplay = () => {
        if (!isLoading) {
            return <View>
                <Text style={styles.basicText}>Today&apos;s Steps</Text>
                <Text style={styles.stepsText}>
                    {pastStepCount}
                </Text>
            </View>
        } else {
            return <ActivityIndicator color="#fff" size="large" />
        }
    }

    return (
        <Pressable onPress={subscribe}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    {isPedometerAvailable ?
                        getStepsDisplay() :
                        <Text style={styles.basicText}>
                            To see your steps, please go to <Text style={styles.boldText}>{"Settings > Apps > Productive RPG"}</Text> and enable &quot;Motion & Fitness&quot;
                        </Text>
                    }
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: LIGHT_BLUE,
        borderWidth: 5,
        borderRadius: "100%",
        width: 250,
        height: 250,
        padding: 30
    },
    innerContainer: {
        borderRadius: "100%",
        width: 200,
        height: 200,
        backgroundColor: DARK_BLUE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    basicText: {
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center'
    },
    boldText: {
        fontWeight: "bold"
    },
    stepsText: {
        color: "#fff",
        fontSize: 50,
        textAlign: 'center'
    }

});
