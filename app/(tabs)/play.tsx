import { coreStyles } from "@/constants/styles";
import { Text, View } from "react-native";

export default function Play() {
    return (
        <View
            style={coreStyles.container}
        >
            <Text style={coreStyles.titleText}>GAMER TIME</Text>
        </View>
    );
}