import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="landing">
      <Stack.Screen name="landing" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
