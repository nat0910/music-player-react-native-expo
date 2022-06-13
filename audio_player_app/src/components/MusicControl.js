import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../functions/context";
import {
  handleAudioPress,
  handleNext,
  handlePrev,
} from "../functions/AudioPlayer";
import { ThemeGuide } from "../assets/constants/Theme";

export default function MusicControl({ url, data, index }) {
  const [state, dispatch] = useContext(AppContext);

  let list = state.list;

  return (
    <View style={styles.container}>
      {/* Prev */}
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.75 : 1 }]}
        onPress={() => {
          handlePrev(state, dispatch, index);
          dispatch({ type: "Music_Control", payload: !state.isPlaying });
        }}
      >
        <Image
          source={require("../assets/icons/icons8-skip-to-start-100.png")}
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            tintColor:
              state.currentIndex === 0
                ? ThemeGuide.colors.darkGray
                : ThemeGuide.colors.white,
          }}
        />
      </Pressable>
      {/* Play*/}
      <Pressable
        style={({ pressed }) => [styles.play, { opacity: pressed ? 0.75 : 1 }]}
        onPress={() => {
          handleAudioPress(state, dispatch, url, data, state.currentIndex);
          dispatch({ type: "Music_Control", payload: !state.isPlaying });
        }}
        s
      >
        <Image
          source={
            state.isPlaying
              ? require("../assets/icons/icons8-pause-100.png")
              : require("../assets/icons/icons8-play-90.png")
          }
          style={{
            width: 30,
            height: 30,
            resizeMode: "contain",
          }}
        />
      </Pressable>
      {/* Next */}
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.75 : 1 }]}
        onPress={() => {
          handleNext(state, dispatch);
        }}
      >
        <Image
          source={require("../assets/icons/icons8-end-100.png")}
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            tintColor:
              state.currentIndex === list.length - 1
                ? ThemeGuide.colors.darkGray
                : ThemeGuide.colors.white,
          }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "25%",
  },
  play: {
    width: 70,
    height: 70,
    backgroundColor: ThemeGuide.colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  next_prev: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
