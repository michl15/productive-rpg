import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#70cbff',
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#25292e',
                },
            }}
        >
            <Tabs.Screen name="index" options={{
                title: 'Home', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name="routines" options={{
                title: 'Routines', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'list-circle' : 'list-circle-outline'} color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name="play" options={{
                title: 'Play', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name="tasks" options={{
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
