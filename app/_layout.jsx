import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { COLORS } from './globalStyles';
import { HomeIcon, FinanceIcon, TodoIcon, NotesIcon } from './components/_NavIcons';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bgLayer0} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.bgLayer1,
            borderTopWidth: 0,
            elevation: 5,
            height: 60,
          },
          tabBarActiveTintColor: COLORS.navActive,
          tabBarInactiveTintColor: COLORS.navInactive,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            href: '/', // Explicitly map to root
            tabBarIcon: ({ focused }) => <HomeIcon isActive={focused} />,
          }}
        />
        <Tabs.Screen
          name="finance"
          options={{
            href: '/finance',
            tabBarIcon: ({ focused }) => <FinanceIcon isActive={focused} />,
          }}
        />
        <Tabs.Screen
          name="todo"
          options={{
            href: '/todo',
            tabBarIcon: ({ focused }) => <TodoIcon isActive={focused} />,
          }}
        />
        <Tabs.Screen
          name="notes"
          options={{
            href: '/notes',
            tabBarIcon: ({ focused }) => <NotesIcon isActive={focused} />,
          }}
        />
      </Tabs>
    </>
  );
}