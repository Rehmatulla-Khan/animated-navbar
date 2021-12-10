import React, { useReducer } from "react";
import {
  Nav,
  Navigation,
  NavigationList,
  NavigationItem,
  AnchorTag,
  NavIcon,
  NavText,
  Indicator,
} from "./navbar.styled";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineCamera,
  AiOutlineUser,
} from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

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

const activeReducer = (state, action) => {
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

const Navbar = () => {
  const [isActive, dispatch] = useReducer(activeReducer, initialState);

  const handleHomeClick = () => {
    dispatch({
      type: "homeIsActive",
    });
  };

  const handleProfileClick = () => {
    dispatch({
      type: "profileIsActive",
    });
  };

  const handleMessageClick = () => {
    dispatch({
      type: "messageIsActive",
    });
  };

  const handlePhotoClick = () => {
    dispatch({
      type: "photoIsActive",
    });
  };

  const handleSettingClick = () => {
    dispatch({
      type: "settingIsActive",
    });
  };

  return (
    <Nav>
      <Navigation>
        <NavigationList>
          <NavigationItem
            className={isActive.homeIsActive ? "list active" : "list"}
            onClick={handleHomeClick}
          >
            <AnchorTag href="#">
              <NavIcon className="icon">
                <AiOutlineHome />
              </NavIcon>
              <NavText className="text">Home</NavText>
            </AnchorTag>
          </NavigationItem>

          <NavigationItem
            className={isActive.profileIsActive ? "list active" : "list"}
            onClick={handleProfileClick}
          >
            <AnchorTag href="#">
              <NavIcon className="icon">
                <AiOutlineUser />
              </NavIcon>
              <NavText className="text">Profile</NavText>
            </AnchorTag>
          </NavigationItem>

          <NavigationItem
            className={isActive.messageIsActive ? "list active" : "list"}
            onClick={handleMessageClick}
          >
            <AnchorTag href="#">
              <NavIcon className="icon">
                <AiOutlineMessage />
              </NavIcon>
              <NavText className="text">Message</NavText>
            </AnchorTag>
          </NavigationItem>

          <NavigationItem
            className={isActive.photoIsActive ? "list active" : "list"}
            onClick={handlePhotoClick}
          >
            <AnchorTag href="#">
              <NavIcon className="icon">
                <AiOutlineCamera />
              </NavIcon>
              <NavText className="text">Photos</NavText>
            </AnchorTag>
          </NavigationItem>

          <NavigationItem
            className={isActive.settingIsActive ? "list active" : "list"}
            onClick={handleSettingClick}
          >
            <AnchorTag href="#">
              <NavIcon className="icon">
                <IoSettingsOutline />
              </NavIcon>
              <NavText className="text">Settings</NavText>
            </AnchorTag>
          </NavigationItem>
          <Indicator className="indicator"></Indicator>
        </NavigationList>
      </Navigation>
    </Nav>
  );
};

export default Navbar;
