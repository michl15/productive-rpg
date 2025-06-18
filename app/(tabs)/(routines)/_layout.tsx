import { BACKGROUND_GRAY } from "@/constants/colors";
import { Stack } from "expo-router";

export default function RoutinesLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: BACKGROUND_GRAY
                }
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    )
}
