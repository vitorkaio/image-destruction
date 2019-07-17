import styled from "styled-components";
import { backgroundColorPrimary } from 'components/ui/Colors';

export const ModalImgCss = styled.div`
  position: fixed;
  top: 50px;
  left: 70px;
  width: 90%;
  height: 80vh;
  z-index: 101;
  padding: 0.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

`;

export const HeaderModalCss = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`;

export const ContentModalCss = styled.div`
  flex: 7;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  background-color: coral;
`;

export const TimerHeaderModalCss = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimerBorderHeaderModalCss = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid cornflowerblue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const TimerTextHeaderModalCss = styled.div`
  color: cornflowerblue;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const IconHeaderModalCss = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 0.3rem;

  & > *:hover {
    cursor: pointer;
    color: red;
    animation: pulse 2.0s ease-out infinite;
  }
`;
