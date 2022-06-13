import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import StackHeader from "../components/StackHeader";
import { ThemeGuide } from "../assets/constants/Theme";
import { AppContext } from "../functions/context";
import MusicControl from "../components/MusicControl";

export default function NowPlayingScreen({ navigation, route }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [state, dispatch] = useContext(AppContext);
  let index = route.params;
  // console.log(data.song_title);
  // console.log(state.isPlaying);
  let data = state.nowPlaying;
  let url = data?.music_url;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginHorizontal: 16,
      }}
    >
      <StackHeader navigation={navigation} title={data?.song_title} />
      <View style={styles.container}>
        {/* Image Conatiner */}
        <View style={styles.img_cont}>
          <Image
            source={{ uri: data.img_url }}
            style={{
              resizeMode: "contain",
              borderRadius: 5,
              height: "100%",
              width: 300,
            }}
          />
        </View>
        {/* Music Control */}

        <MusicControl data={data} url={url} index={index} />
      </View>
    </View>
    // <Playing song={data?.music_url} />
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: ThemeGuide.sizes.width - 32,
    marginVertical: 25,
  },
  img_cont: {
    width: "100%",
    height: 300,
    alignItems: "center",
    elevation: 10,
    backgroundColor: ThemeGuide.colors.transparent,
  },
  play: {
    width: 70,
    height: 70,
    backgroundColor: ThemeGuide.colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
