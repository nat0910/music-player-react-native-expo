export async function play(obj, uri, dispatch, item, index) {
  let status = await obj.loadAsync({ uri }, { shouldPlay: true });
//   console.log("Status", status.isPlaying);
  let update = status.isPlaying;
  console.log(index);
  dispatch({ type: "Card_Pressed", payload: { item, index } });
  dispatch({ type: "PlaybackInit", payload: { obj, status, update } });
  return status;
}

export async function pause(dispatch, playbackObj) {
  let status = await playbackObj.pauseAsync();
  let update = status.isPlaying;
  dispatch({ type: "UpdatePlayer", payload: { status, update } });
  return status;
}

export async function resume(dispatch, playbackObj) {
  let status = await playbackObj.playAsync();
  let update = status.isPlaying;
  dispatch({ type: "UpdatePlayer", payload: { status, update } });
  return status;
}
