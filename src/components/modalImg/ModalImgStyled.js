import styled from "styled-components";
import { BorderColor, BackgroundColorPrimary, SecundaryColor } from 'components/ui/Colors';

export const ModalImgCss = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  margin-top: -100px; /* Negative half of height. */
  margin-left: -250px;
  width: 500px;
  height: 80vh;
  z-index: 101;
  padding: 0.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${BackgroundColorPrimary};
  border: 1px solid ${BorderColor};
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  animation: zoomIn 0.6s ease-out both;

`;

export const HeaderModalCss = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
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
  border: 0 solid cornflowerblue;
  border-width: 0 0 2px 0;
  width: 50px;
  height: 30px;
`;

export const TimerTextHeaderModalCss = styled.div`
  color: cornflowerblue;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const IconHeaderModalCss = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-right: 0.3rem;

  & > *:hover {
    cursor: pointer;
    color: ${SecundaryColor};
    animation: pulse 2.0s ease-out infinite;
  }
`;

export const ContentModalCss = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  border: 1px solid #eee;
  padding: 0.2rem;

`;

export const BackgroundImageModalCss = styled.div`
  flex: 1;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`;
