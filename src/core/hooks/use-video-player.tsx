import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext, PropsWithChildren } from "react";

type StateType = {
  videoId: string;
  link: string;
};

type ActionType = {
  type: "CHANGE_VIDEO_ID";
  payload: {
    videoId: string;
  };
};

type DispatchType = React.Dispatch<ActionType>;

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "CHANGE_VIDEO_ID": {
      return {
        ...state,
        videoId: action.payload.videoId,
        link: `https://www.youtube.com/embed/${action.payload.videoId}`,
      };
    }
    default:
      return state;
  }
}

const initialState: StateType = {
  videoId: "",
  link: "",
};

const VideoPlayerStateContext = createContext<StateType>(initialState);
const VideoPlayerDispatchContext = createContext<DispatchType>(() => {});

function VideoPlayerProvider(props: PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <VideoPlayerStateContext.Provider value={state}>
      <VideoPlayerDispatchContext.Provider value={dispatch}>
        {props.children}
      </VideoPlayerDispatchContext.Provider>
    </VideoPlayerStateContext.Provider>
  );
}

function useVideoPlayerState() {
  return useContext(VideoPlayerStateContext);
}

function useVideoPlayerDispatch() {
  return useContext(VideoPlayerDispatchContext);
}

export { VideoPlayerProvider, useVideoPlayerState, useVideoPlayerDispatch };
