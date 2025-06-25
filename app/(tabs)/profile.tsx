import { coreStyles } from "@/constants/styles";
import { Text, View } from "react-native";

export default function Profile() {
    return (
        <View
            style={coreStyles.container}
        >
            <Text style={coreStyles.titleText}>Profile</Text>
        </View>
    );
}