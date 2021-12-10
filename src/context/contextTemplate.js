import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  //add your initial state values here
};

const reducer = (state, action) => {
  //add your reducer here
};

const NavBarStateContext = createContext(initialState);
const NavBarDispatchContext = createContext(() => 0);

const NavBarProvider = ({ children, initialState }) => {
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
