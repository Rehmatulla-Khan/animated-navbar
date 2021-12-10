import styled, { css } from "styled-components";

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const firstColor = "#222327";

export const Nav = styled.div`
  ${FlexCenter}

  min-height: 100vh;

  background: ${firstColor};
`;

export const Navigation = styled.div`
  ${FlexCenter}

  position: relative;

  width: 400px;
  height: 70px;

  background: #fff;

  border-radius: 10px;
`;

export const NavigationList = styled.ul`
  display: flex;

  width: 350px;

  .active a .icon {
    transform: translateY(-35px);
  }

  .active a .text {
    opacity: 1;

    transform: translateY(10px);
  }
`;

export const NavigationItem = styled.li`
  position: relative;
  list-style: none;

  width: 70px;
  height: 70px;

  z-index: 1;

  &:nth-child(1).active ~ .indicator {
    transform: translateX(calc(70px * 0));
  }

  &:nth-child(2).active ~ .indicator {
    transform: translateX(calc(70px * 1));
  }

  &:nth-child(3).active ~ .indicator {
    transform: translateX(calc(70px * 2));
  }

  &:nth-child(4).active ~ .indicator {
    transform: translateX(calc(70px * 3));
  }

  &:nth-child(5).active ~ .indicator {
    transform: translateX(calc(70px * 4));
  }
`;

export const AnchorTag = styled.a`
  position: relative;

  ${FlexCenter}
  flex-direction: column;

  width: 100%;

  text-align: center;

  font-weight: 500;
`;

export const NavIcon = styled.span`
  position: relative;

  display: block;

  line-height: 75px;

  font-size: 1.5em;

  text-align: center;

  transition: 0.5s;

  color: ${firstColor};
`;

export const NavText = styled.span`
  position: absolute;

  color: ${firstColor};

  font-weight: 400;
  font-size: 0.75em;

  letter-spacing: 0.05em;

  transition: 0.5s;

  opacity: 0;

  transform: translateY(20px);
`;

export const Indicator = styled.div`
  position: absolute;
  top: -50%;

  width: 70px;
  height: 70px;

  background: #956be8;

  border-radius: 50%;
  border: 6px solid ${firstColor};

  transition: 0.5s;

  &::before {
    content: "";

    position: absolute;
    top: 50%;
    left: -22px;

    width: 20px;
    height: 20px;

    background: transparent;

    border-top-right-radius: 20px;

    box-shadow: 1px -10px 0 0 ${firstColor};
  }

  &::after {
    content: "";

    position: absolute;
    top: 50%;
    right: -22px;

    width: 20px;
    height: 20px;

    background: transparent;

    border-top-left-radius: 20px;

    box-shadow: -1px -10px 0 0 ${firstColor};
  }
`;
