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

export { getInitialTasks, setInAsyncStorage };

