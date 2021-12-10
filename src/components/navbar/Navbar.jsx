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

  const arr = [
    {
      item: "Home",
      icon: <AiOutlineHome />,
      onClick: handleHomeClick,
      isActive: isActive.homeIsActive,
    },
    {
      item: "Profile",
      icon: <AiOutlineUser />,
      onClick: handleProfileClick,
      isActive: isActive.profileIsActive,
    },
    {
      item: "Message",
      icon: <AiOutlineMessage />,
      onClick: handleMessageClick,
      isActive: isActive.messageIsActive,
    },
    {
      item: "Photos",
      icon: <AiOutlineCamera />,
      onClick: handlePhotoClick,
      isActive: isActive.photoIsActive,
    },
    {
      item: "Settings",
      icon: <IoSettingsOutline />,
      onClick: handleSettingClick,
      isActive: isActive.settingIsActive,
    },
  ];

  return (
    <Nav>
      <Navigation>
        <NavigationList>
          {arr.map(({ item, icon, onClick, isActive }) => (
            <NavigationItem
              className={isActive ? "list active" : "list"}
              onClick={onClick}
            >
              <AnchorTag href="#">
                <NavIcon className="icon">{icon}</NavIcon>
                <NavText className="text">{item}</NavText>
              </AnchorTag>
            </NavigationItem>
          ))}
          <Indicator className="indicator"></Indicator>
        </NavigationList>
      </Navigation>
    </Nav>
  );
};

export default Navbar;
