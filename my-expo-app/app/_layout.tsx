import HomePage from 'components/coffee/HomePage';
import '../global.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="order" options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
}
