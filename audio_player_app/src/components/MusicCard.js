import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";
import { ThemeGuide } from "../assets/constants/Theme";
import { AppContext } from "../functions/context";
import { handleAudioPress } from "../functions/AudioPlayer";

export default function MusicCard({ navigation, item, index }) {
  // let { item } = data;

  const [state, dispatch] = useContext(AppContext);
  const { colors } = useTheme();

  let uri = item?.music_url;

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("nowplayingscreen", index);
        handleAudioPress(state, dispatch, uri, item, index);
      }}
    >
      <View style={[styles.cards, { backgroundColor: colors.card }]}>
        {/* Image Container */}

        <View style={styles.img_cont}>
          <Image
            style={styles.img_cont}
            source={{
              uri: item.img_url,
            }}
          />
        </View>

        {/* details */}

        <View
          style={{
            marginTop: 5,
            height: 50,
            justifyContent: "space-around",
          }}
        >
          <Text style={styles.title} numberOfLines={1}>
            {item?.song_title}
          </Text>
          <Text style={styles.artist}>{item?.artist_name}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cards: {
    width: 155,
    height: 225,
    padding: 7.5,
    borderRadius: 10,
    elevation: 2,
  },
  img_cont: {
    width: 140,
    height: 150,
    resizeMode: "contain",
    borderRadius: 5,
  },
  title: {
    fontFamily: "Poppins-Medium",
    color: ThemeGuide.colors.white,
    fontSize: 14,
    letterSpacing: 0.2,
    textTransform: "capitalize",
  },
  artist: {
    color: ThemeGuide.colors.gray2,
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    textTransform: "capitalize",
  },
});
