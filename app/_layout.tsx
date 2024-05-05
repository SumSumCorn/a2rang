import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';

import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import { TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PretendardVariable: require('../assets/fonts/PretendardVariable.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const router = useRouter();
  // const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
          <Stack.Screen
            name='festival'
            options={{
              title: '행사',
              headerLeft: () => (
                <TouchableOpacity onPress={router.back}>
                  <Ionicons name='arrow-back' size={24} />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={router.back}>
                  <Ionicons name='search' size={24} />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name='detail/[id]'
            options={{
              title: '상세정보',
              headerLeft: () => (
                <TouchableOpacity onPress={router.back}>
                  <Ionicons name='arrow-back' size={24} />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={router.back}>
                  <Ionicons name='search' size={24} />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
