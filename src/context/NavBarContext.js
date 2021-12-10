import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  homeIsActive: true,
  profileIsActive: false,
  messageIsActive: false,
  photoIsActive: false,
  settingIsActive: false,
};

const resetState = {
  ...initialState,
  homeIsActive: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "homeIsActive":
      return {
        ...resetState,
        homeIsActive: true,
      };
    case "profileIsActive":
      return {
        ...resetState,
        profileIsActive: true,
      };
    case "messageIsActive":
      return {
        ...resetState,
        messageIsActive: true,
      };
    case "photoIsActive":
      return {
        ...resetState,
        photoIsActive: true,
      };
    case "settingIsActive":
      return {
        ...resetState,
        settingIsActive: true,
      };

    default:
      return state;
  }
};

const NavBarStateContext = createContext(initialState);
const NavBarDispatchContext = createContext(() => 0);

const NavBarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NavBarDispatchContext.Provider value={dispatch}>
      <NavBarStateContext.Provider value={state}>
        {children}
      </NavBarStateContext.Provider>
    </NavBarDispatchContext.Provider>
  );
};

const useNavBarState = () => {
  const state = useContext(NavBarStateContext);
  if (state === undefined) {
    throw new Error("useNavBarState must be used within a NavBarProvider");
  }
  return state;
};

const useNavBarDispatch = () => {
  const dispatcher = useContext(NavBarDispatchContext);
  if (dispatcher === undefined) {
    throw new Error("useNavBarDispatch must be used within a NavBarProvider");
  }
  return dispatcher;
};

export {
  NavBarProvider,
  NavBarStateContext,
  useNavBarState,
  useNavBarDispatch,
};
