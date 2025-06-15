import { DARK_BLUE, LIGHT_BLUE } from '@/constants/colors';
import { Pedometer } from 'expo-sensors';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StepTracker() {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState(false);
    const [pastStepCount, setPastStepCount] = useState(0);

    const subscribe = async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(isAvailable);

        if (isAvailable) {
            const end = new Date();
            const start = new Date();
            start.setHours(0, 0, 0, 0);

            const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
            if (pastStepCountResult) {
                setPastStepCount(pastStepCountResult.steps);
            }
        }
    };

    useEffect(() => {
        subscribe();
        //return () => sub && sub.remove();
    }, []);

    return (
        isPedometerAvailable ? <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.basicText}>Today&apos;s Steps</Text>
                <Text style={styles.stepsText}>
                    {pastStepCount}
                </Text>
            </View>
        </View> : <View>
            <Text style={styles.basicText}>
                To see your steps, please go to {"Settings > Apps > Productive RPG"} and enable &quot;Motion & Fitness&quot;
            </Text>
        </View>
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
        color: '#fff'
    },
    stepsText: {
        color: "#fff",
        fontSize: 50,
    }

});
