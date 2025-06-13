import HomeScreenButton from "@/components/HomeScreenButton";
import { formatGreeting, formatTime } from "@/util/timeUtil";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StepTracker from "../../components/StepTracker";

export default function Index() {
  const curr = new Date();
  const [currTime, setCurrTime] = useState(formatTime(curr));
  const [greeting, setGreeting] = useState(formatGreeting(curr))

  const router = useRouter();

  const onRoutinesPress = () => {
    router.navigate("/(tabs)/routines")
  }

  const onTasksPress = () => {
    router.navigate("/(tabs)/tasks")
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
      style={styles.container}
    >
      <Text style={styles.titleText}>{greeting}</Text>
      <Text style={styles.timeText}>{currTime} Let&apos;s get to work!</Text>
      <StepTracker />
      <HomeScreenButton label="Today's Routines" onPress={onRoutinesPress} />
      <HomeScreenButton label="Do a Task" onPress={onTasksPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 35,
    color: '#fff',
    padding: 20,
    paddingTop: 0
  },
  timeText: {
    fontSize: 18,
    padding: 10,
    color: "#fff"
  },
  basicText: {
    color: '#fff'
  }
})