import { coreStyles } from '@/constants/styles';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <View style={coreStyles.container}>
                <Text style={coreStyles.titleText}> Sorry, this page could not be found</Text>
                <Link href="/" style={styles.button}>
                    Go back to Home screen
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});
