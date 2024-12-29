import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css'
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, SafeAreaView, Text,View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
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
  <View className='relative flex-1'>
    <StatusBar style='light'/>
    <Image blurRadius={70} className='absolute w-full h-full' source={require('../assets/images/bg.png')}/>
    <SafeAreaView className='flex flex-1'>  
     <HomeScreen/>
    </SafeAreaView>
  </View>
  );
}
