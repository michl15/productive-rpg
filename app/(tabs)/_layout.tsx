import HeaderSteps from '@/components/HeaderSteps';
import { BACKGROUND_GRAY, HEADER_GRAY, LIGHT_BLUE } from '@/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: LIGHT_BLUE,
                tabBarStyle: {
                    backgroundColor: BACKGROUND_GRAY,
                },
                headerStyle: {
                    backgroundColor: HEADER_GRAY,
                    height: 110
                },
                headerTintColor: "#fff",
                headerTitle: "",
                headerRight: () => <HeaderSteps />
            }}
            initialRouteName='index'
        >
            <Tabs.Screen name="index" options={{
                title: 'Home', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name="(routines)" options={{
                title: 'Routines', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'list-circle' : 'list-circle-outline'} color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name="play" options={{
                title: 'Play', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name="(tasks)" options={{
                title: 'Tasks', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'checkbox' : 'checkbox-outline'} color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name="profile" options={{
                title: 'Profile', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={24} />
                ),
            }} />
        </Tabs>
    );
}
