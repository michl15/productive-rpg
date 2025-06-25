import Button from "@/components/Button";
import HomeScreenButton from "@/components/HomeScreenButton";
import StepTracker from "@/components/StepTracker";
import { coreStyles } from "@/constants/styles";
import { formatGreeting, formatTime } from "@/util/timeUtil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const curr = new Date();
  const [currTime, setCurrTime] = useState(formatTime(curr));
  const [greeting, setGreeting] = useState(formatGreeting(curr))

  const router = useRouter();

  const onRoutinesPress = () => {
    router.push("/(tabs)/(routines)")
  }

  const onTasksPress = () => {
    router.push("/(tabs)/(tasks)")
  }

  const onClearPress = () => {
    AsyncStorage.clear();
  }

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(timer)
  }, []);

  useEffect(() => {
    let timer = setInterval(() => {
      setGreeting(formatGreeting(new Date()));
    }, 60000);

    return () => clearInterval(timer)
  }, []);

  return (
    <View
      style={coreStyles.container}
    >
      <Text style={coreStyles.titleText}>{greeting}</Text>
      <Text style={styles.timeText}>{currTime} Let&apos;s get going!</Text>
      <StepTracker />
      <HomeScreenButton label="Today's Routines" onPress={onRoutinesPress} />
      <HomeScreenButton label="Do a Task" onPress={onTasksPress} />
      <Button label="(DEV ONLY) Clear storage" onPress={onClearPress} size="small" variant="error" />
    </View>
  );
}

const styles = StyleSheet.create({
  timeText: {
    fontSize: 18,
    padding: 10,
    color: "#fff"
  }
})