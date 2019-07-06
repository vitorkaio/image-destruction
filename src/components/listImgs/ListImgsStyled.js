import styled from 'styled-components';

export const ListImgsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export const ImgWrapper = styled.div`
  margin: 1rem;
  width: 200px;
  height: 200px;
  border: 1px solid #909090;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.6s;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(0,0,0,0.5);
    animation: pulse 2.0s ease-out infinite; /* Animação de entrada. */
  }

`;

export const BackgroundImageWrapper = styled.div`
  flex: 1;
  background: url(${props => props.url});
  filter: blur(5px) grayscale(90%);
  width: 200px;
  height: 200px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 99;
`;
