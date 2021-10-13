import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Splash1 from "./screens/Splash1";
import Splash2 from "./screens/Splash2";
import Splash3 from "./screens/Splash3";

export default function App() {
  return (
    <View>
      {/* <Splash1 />
      <Splash2 /> */}
      <Splash3 />
    </View>
  );
}
