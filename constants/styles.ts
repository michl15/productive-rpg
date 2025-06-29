import { StyleSheet } from "react-native";
import { BACKGROUND_GRAY } from "./colors";

const coreStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_GRAY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 30,
        color: '#fff',
        padding: 10
    },
    basicText: {
        color: '#fff'
    }
});

export { coreStyles };
