import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import React, { useState, useLayoutEffect, useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";

import MusicCard from "../components/MusicCard";
import { ThemeGuide } from "../assets/constants/Theme";
import { Audio } from "expo-av";
import { AppContext } from "../functions/context";
import { handleAudioPress } from "../functions/AudioPlayer";

const fetch_url = `http://192.168.159.4:5000`;

export default function MainScreen({ navigation }) {
  const { colors } = useTheme();
  const { data } = useFetch(fetch_url);
  const [state, dispatch] = useContext(AppContext);

  useLayoutEffect(() => {
    dispatch({ type: "ListInitialize", payload: data });
  }, [data]);

  let playingData = state.nowPlaying;
  let item = state.nowPlaying;
  // console.log(playingData);

  // console.log(state.playbackObj);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <MusicCard navigation={navigation} item={item} index={index} />
          );
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginTop: 20,
        }}
        style={{
          width: "100%",
          // backgroundColor: "pink",
        }}
        contentContainerStyle={{
          paddingBottom: 25,
          marginHorizontal: 16,
        }}
        bounces={false}
      />
      <View
        style={{
          height: 0,
          elevation: 10,
          backgroundColor: ThemeGuide.colors.transparent,
        }}
      >
        {state.modalOpen && (
          <View
            style={{
              backgroundColor: "#222129",
              height: 75,
              marginHorizontal: 5,
              borderRadius: 10,
              padding: 7.5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              elevation: 5,
              zIndex: 99,
              position: "relative",
              bottom: "22%",
              shadowColor: ThemeGuide.colors.black,
            }}
          >
            <Pressable
              onPress={() => navigation.navigate("nowplayingscreen", item)}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    height: 62.5,
                    width: 50,
                  }}
                >
                  <Image
                    style={{
                      resizeMode: "contain",
                      borderRadius: 5,
                      width: "100%",
                      height: "100%",
                    }}
                    source={{ uri: playingData?.img_url }}
                  />
                </View>

                <View
                  style={{
                    marginLeft: 15,
                  }}
                >
                  <Text style={styles.title}>{playingData?.song_title}</Text>
                  <Text style={styles.artist}>{playingData?.artist_name}</Text>
                </View>
              </View>
            </Pressable>

            <Pressable
              style={{
                marginRight: 15,
              }}
              onPress={() => {
                handleAudioPress(
                  state,
                  dispatch,
                  playingData.music_url,
                  playingData,
                  state.currentIndex
                );
              }}
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
                  tintColor: ThemeGuide.colors.white,
                }}
              />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-Medium",
    color: ThemeGuide.colors.white,
    fontSize: 15,
    textTransform: "capitalize",
  },
  artist: {
    color: ThemeGuide.colors.gray3,
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    textTransform: "capitalize",
  },
});
