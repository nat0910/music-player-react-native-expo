import { Audio } from "expo-av";
import { pause, play, resume } from "./musicFuntion";

export const handleAudioPress = async (state, dispatch, uri, item, index) => {
  const { playbackObj, playbackStatus, nowPlaying, isPlaying } = state;
  //   console.log(Audio.Sound.createAsync({ uri }, { shouldPlay: true }));
  //   console.log(playbackStatus);
  //   console.log(playbackStatus?.isLoaded);
  //   console.log(playbackStatus?.isPlaying);

  if (playbackStatus === null) {
    let obj = new Audio.Sound();

    play(obj, uri, dispatch, item, index);
  }
  if (
    playbackStatus?.isPlaying &&
    playbackStatus?.isLoaded &&
    item?.id === nowPlaying?.id
  ) {
    await pause(dispatch, playbackObj);
  }
  if (
    playbackStatus?.isLoaded &&
    !playbackStatus?.isPlaying &&
    item?.id === nowPlaying?.id
  ) {
    await resume(dispatch, playbackObj);
  }
  if (item?.id !== nowPlaying.id && playbackStatus?.isLoaded) {
    await playbackObj.stopAsync();
    await playbackObj.unloadAsync();

    play(playbackObj, uri, dispatch, item, state.currentIndex);
  }
};

export const handleNext = async (state, dispatch) => {
  let { list, playbackObj, playbackStatus, nowPlaying, currentIndex } = state;
  const newIndex = currentIndex + 1;
  const nextSong = list[newIndex];
  if (currentIndex === list.length - 1) {
    console.log("No Next Song");
  } else if (playbackStatus?.isLoaded) {
    await playbackObj.stopAsync();
    await playbackObj.unloadAsync();
    let uri = nextSong.music_url;
    play(playbackObj, uri, dispatch, nextSong, newIndex);
  }
};
export const handlePrev = async (state, dispatch) => {
  let { list, playbackObj, playbackStatus, nowPlaying, currentIndex } = state;
  const newIndex = currentIndex - 1;
  const prevSong = list[newIndex];
  if (currentIndex === 0) {
    console.log("No previous Song");
  } else if (playbackStatus?.isLoaded) {
    await playbackObj.stopAsync();
    await playbackObj.unloadAsync();
    let uri = prevSong.music_url;
    play(playbackObj, uri, dispatch, prevSong, newIndex);
  }
};
