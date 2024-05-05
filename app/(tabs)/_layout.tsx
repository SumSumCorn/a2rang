import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeLogo from '@/assets/icons/Basic/icon_home.svg';
import Bookmark from '@/assets/icons/Basic/icon_bookmark.svg';
import MyPage from '@/assets/icons/Basic/icon_mypage.svg';
import HomeLogoActive from '@/assets/icons/Active/icon_home.svg';
import BookmarkActive from '@/assets/icons/Active/icon_bookmark.svg';
import MyPageActive from '@/assets/icons/Active/icon_mypage.svg';

import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].orange,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: '홈',
            tabBarIcon: ({ focused, color }) => {
              return focused ? <HomeLogoActive /> : <HomeLogo />;
            },
            headerRight: () => (
              <Link href='/modal' asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Ionicons
                      name='notifications-outline'
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name='mykeyword'
          options={{
            title: '관심',
            tabBarIcon: ({ focused, color }) => {
              return focused ? <BookmarkActive /> : <Bookmark />;
            },
            headerRight: () => (
              <Link href='/modal' asChild>
                <Pressable>
                  {({ pressed }) => (
                    <AntDesign
                      name='search1'
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name='mypage'
          options={{
            title: '마이페이지',
            tabBarIcon: ({ focused, color }) =>
              focused ? <MyPageActive /> : <MyPage />,

            headerRight: () => (
              <Link href='/modal' asChild>
                <Pressable>
                  {({ pressed }) => (
                    <AntDesign
                      name='setting'
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
