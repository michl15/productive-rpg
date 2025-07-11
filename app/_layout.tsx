import { BACKGROUND_GRAY } from "@/constants/colors";
import { persistor, store } from "@/redux/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack screenOptions={{
          contentStyle: {
            backgroundColor: BACKGROUND_GRAY
          },
        }}>
          <Stack.Screen name="landing" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </PersistGate>
    </Provider>
  )
}
