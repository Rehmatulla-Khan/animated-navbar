import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  background: #222327;

  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    width: 400px;
    height: 70px;

    background: #fff;

    border-radius: 10px;

    ul {
      display: flex;

      width: 350px;

      li {
        position: relative;
        list-style: none;

        width: 70px;
        height: 70px;

        z-index: 1;

        a {
          position: relative;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          width: 100%;

          text-align: center;

          font-weight: 500;

          .icon {
            position: relative;

            display: block;

            line-height: 75px;

            font-size: 1.5em;

            text-align: center;

            transition: 0.5s;

            color: #222327;
          }

          .text {
            position: absolute;

            color: #222327;

            font-weight: 400;
            font-size: 0.75em;

            letter-spacing: 0.05em;

            transition: 0.5s;

            opacity: 0;

            transform: translateY(20px);
          }
        }

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
      }

      .indicator {
        position: absolute;
        top: -50%;

        width: 70px;
        height: 70px;

        background: #956be8;

        border-radius: 50%;
        border: 6px solid #222327;

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

          box-shadow: 1px -10px 0 0 #222327;
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

          box-shadow: -1px -10px 0 0 #222327;
        }
      }

      .active a .icon {
        transform: translateY(-35px);
      }

      .active a .text {
        opacity: 1;

        transform: translateY(10px);
      }
    }
  }
`;
