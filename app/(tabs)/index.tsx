import { formatTime } from "@/util/timeUtil";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [currTime, setCurrTime] = useState(formatTime(new Date()));

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(timer)
  }, [])

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.titleText}>{currTime}</Text>
      <Text style={styles.basicText}>Let&apos;s get to work!</Text>
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
    fontSize: 30,
    color: '#fff',
    paddingBottom: 20
  },
  basicText: {
    color: '#fff'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
})