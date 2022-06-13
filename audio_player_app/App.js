import React, { useState, createContext, useReducer, useEffect } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { Audio } from "expo-av";

import { AppContext } from "./src/functions/context";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

import MainScreen from "./src/screen/MainScreen";
import NowPlayingScreen from "./src/screen/NowPlayingScreen";

import { reducer } from "./src/functions/reducer";

const navTheme = {
  dark: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#141414",
    card: "#1f1f1f",
    border: "#5c5c5c",
    text: "#fff",
  },
};

const initialState = {
  nowPlaying: {},
  queue: [],
  isPlaying: false,
  modalOpen: false,
  list: [],
  playbackStatus: null,
  playbackObj: null,
  currentIndex: null,
};

export default function App() {
  const [isloaded, error] = useFonts({
    "Pacifico-Regular": require("./src/assets/fonts/Pacifico-Regular.ttf"),
    "Poppins-Thin": require("./src/assets/fonts/Poppins-Thin.ttf"),
    "Poppins-ExtraLight": require("./src/assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./src/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!isloaded) {
    <AppLoading />;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // const value = [state, dispatch];

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <AppContext.Provider value={[state, dispatch]}>
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator
            initialRouteName="mainscreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="mainscreen" component={MainScreen} />
            <Stack.Screen
              name="nowplayingscreen"
              component={NowPlayingScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </SafeAreaView>
  );
}
