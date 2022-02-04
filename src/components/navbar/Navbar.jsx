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
import { useNavBarDispatch, useNavBarState } from "../../context/NavBarContext";

const Navbar = () => {
  const {
    homeIsActive,
    photoIsActive,
    messageIsActive,
    profileIsActive,
    settingIsActive,
  } = useNavBarState();
  const dispatch = useNavBarDispatch();

  const handleClick = (dispatchType) => {
    dispatch({
      type: dispatchType,
    });
  };

  const arr = [
    {
      item: "Home",
      icon: <AiOutlineHome />,
      onClick: () => handleClick("homeIsActive"),
      isActive: homeIsActive,
    },
    {
      item: "Profile",
      icon: <AiOutlineUser />,
      onClick: () => handleClick("profileIsActive"),
      isActive: profileIsActive,
    },
    {
      item: "Message",
      icon: <AiOutlineMessage />,
      onClick: () => handleClick("messageIsActive"),
      isActive: messageIsActive,
    },
    {
      item: "Photo",
      icon: <AiOutlineCamera />,
      onClick: () => handleClick("photoIsActive"),
      isActive: photoIsActive,
    },
    {
      item: "Setting",
      icon: <IoSettingsOutline />,
      onClick: () => handleClick("settingIsActive"),
      isActive: settingIsActive,
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
