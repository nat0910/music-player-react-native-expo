export const reducer = (state, action) => {
  switch (action.type) {
    case "Card_Pressed":
      let playing = action.payload.item;
      const sorted = state.list.filter(
        (song) => song.id != action.payload.item.id
      );
      console.log(action.payload);
      return {
        ...state,
        nowPlaying: playing,
        queue: sorted,
        isPlaying: false,
        modalOpen: true,
        currentIndex: action.payload.index,
      };
      break;
    case "ListInitialize":
      return {
        ...state,
        list: action.payload,
      };
      break;
    case "Music_Control":
      return {
        ...state,
        isPlaying: action.payload,
      };
      break;
    case "PlaybackInit":
      return {
        ...state,
        playbackObj: action.payload.obj,
        playbackStatus: action.payload.status,
        isPlaying: action.payload.update,
      };
      break;
    case "UpdatePlayer":
      // console.log(action.payload);
      return {
        ...state,
        playbackStatus: action.payload.status,
        isPlaying: action.payload.update,
      };
      break;
    case "NewSong":
      return {
        ...state,
        playbackObj: action.payload.playbackObj,
        playbackStatus: action.payload.status,
        isPlaying: action.payload.update,
      };
      break;
    default:
      throw new Error("no matching action type");
      break;
  }
};
