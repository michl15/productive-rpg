import AsyncStorage from "@react-native-async-storage/async-storage";

const getInitialTasks = async () => {
    try {
        const taskList = await AsyncStorage.getItem("tasks");

        if (taskList) {
            return JSON.parse(taskList);
        } else {
            return [];
        }
    } catch (e) {
        console.error(e);
    } finally {
        return [];
    }
}

const setInAsyncStorage = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error(e)
    }
}

const randomId = (length: number = 6) => {
    return Math.random().toString(36).substring(2, length + 2);
}

export { getInitialTasks, randomId, setInAsyncStorage };

