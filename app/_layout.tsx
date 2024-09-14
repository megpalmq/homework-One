import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "play-bold":require('./../assets/fonts/PlaypenSans-Bold.ttf'),
    "play-reg":require('./../assets/fonts/PlaypenSans-Regular.ttf'),
    "play-light":require('./../assets/fonts/PlaypenSans-Light.ttf'),
  })
  return (
    <Stack screenOptions={{
      headerShown:false,
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
