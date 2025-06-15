import { BACKGROUND_GRAY } from "@/constants/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: BACKGROUND_GRAY
                }
            }}
        >
            <Stack.Screen name="index" options={{
                animation: "fade_from_bottom"
            }} />
            <Stack.Screen name="create" />
        </Stack>
    )
}
