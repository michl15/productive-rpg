import { RootState } from "@/redux/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function HeaderSteps() {
    const { todaySteps, stepsBank, tokens } = useSelector((state: RootState) => state.currencyReducer)


    return (
        <>
            <View style={styles.stepsDisplay}>
                <Ionicons name="radio-button-on" size={20} color="#fff" />
                <Text style={styles.text}>
                    {tokens}
                </Text>
            </View>
            <View style={styles.stepsDisplay}>
                <Ionicons name="footsteps" size={20} color="#fff" />
                <Text style={styles.text}>
                    {todaySteps + stepsBank}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    stepsDisplay: {
        padding: 10,
        flexDirection: "row"
    },
    text: {
        color: "#fff",
        paddingLeft: 5,
        fontSize: 16
    }
})