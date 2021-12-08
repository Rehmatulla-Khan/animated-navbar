import React, { useReducer } from "react";
import { Nav } from "./navbar.styled";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineCamera,
} from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
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
      <div className="navigation">
        <ul>
          <li
            className={isActive.homeIsActive ? "list active" : "list"}
            onClick={handleHomeClick}
          >
            <a href="#">
              <span className="icon">
                <AiOutlineHome />
              </span>
              <span className="text">Home</span>
            </a>
          </li>

          <li
            className={isActive.profileIsActive ? "list active" : "list"}
            onClick={handleProfileClick}
          >
            <a href="#">
              <span className="icon">
                <FaRegUser />
              </span>
              <span className="text">Profile</span>
            </a>
          </li>

          <li
            className={isActive.messageIsActive ? "list active" : "list"}
            onClick={handleMessageClick}
          >
            <a href="#">
              <span className="icon">
                <AiOutlineMessage />
              </span>
              <span className="text">Message</span>
            </a>
          </li>

          <li
            className={isActive.photoIsActive ? "list active" : "list"}
            onClick={handlePhotoClick}
          >
            <a href="#">
              <span className="icon">
                <AiOutlineCamera />
              </span>
              <span className="text">Photos</span>
            </a>
          </li>

          <li
            className={isActive.settingIsActive ? "list active" : "list"}
            onClick={handleSettingClick}
          >
            <a href="#">
              <span className="icon">
                <IoSettingsOutline />
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
