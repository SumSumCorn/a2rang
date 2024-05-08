import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';

import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// import { useColorScheme } from '@/components/useColorScheme';
import { TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const router = useRouter();
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
  useEffect(() => {
    router.replace('/(tabs)/home');
  }, []);

  return (
    <Stack screenOptions={ }>
      <Stack.Screen name='index' options={{ title: '안녕' }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false, gestureEnabled:  }} />
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
  );
};

const RootLayoutNav = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <InitialLayout />
    </GestureHandlerRootView>
  );
};

export default RootLayoutNav;
