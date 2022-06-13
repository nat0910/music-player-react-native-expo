import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { ThemeGuide } from "../assets/constants/Theme";


export default function StackHeader({ navigation, title }) {
  // console.log(ThemeGuide.sizes.width - 40);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../assets/icons/Arrow_back.png")}
          style={{
            width: 20,
            height: 20,
            tintColor: ThemeGuide.colors.white,
          }}
        />
      </Pressable>
      <View
        style={{
          width: 300,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: ThemeGuide.colors.white,
            letterSpacing: 2,
            fontFamily: "Poppins-Light",
            fontSize: 11,
            textTransform: "uppercase",
          }}
        >
          Now Playing
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: ThemeGuide.colors.white,
            fontFamily: "Poppins-Medium",
            fontSize: 15,
            textTransform: "capitalize",
            letterSpacing: 0.5,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ThemeGuide.sizes.width - 40,
    height: 60,
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
