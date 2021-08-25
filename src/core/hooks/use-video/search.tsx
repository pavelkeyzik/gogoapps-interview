import { useContext } from "react";
import { useReducer } from "react";
import { createContext, PropsWithChildren } from "react";

type StateType = {
  search: string | null;
};

type ActionType = {
  type: "UPDATE_SEARCH_VALUE";
  payload: {
    search: string | null;
  };
};

type DispatchType = React.Dispatch<ActionType>;

const initialState: StateType = {
  search: null,
};

const VideosSearhStateContext = createContext<StateType>(initialState);
const VideosSearchDispatchContext = createContext<DispatchType>(() => {});

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "UPDATE_SEARCH_VALUE":
      return {
        ...state,
        search: action.payload.search,
      };
    default:
      return state;
  }
}

function VideosSearchProvider(props: PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <VideosSearhStateContext.Provider value={state}>
      <VideosSearchDispatchContext.Provider value={dispatch}>
        {props.children}
      </VideosSearchDispatchContext.Provider>
    </VideosSearhStateContext.Provider>
  );
}

function useVideosSearchState() {
  return useContext(VideosSearhStateContext);
}

function useVideosSearchDispatch() {
  return useContext(VideosSearchDispatchContext);
}

export { VideosSearchProvider, useVideosSearchState, useVideosSearchDispatch };
