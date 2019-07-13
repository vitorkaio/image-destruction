import React, { useState } from 'react';
import { ListImgsWrapper, ImgWrapper, IconWrapper, BackgroundImageWrapper, TimerWrapper, TimerTextWrapper } from './ListImgsStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons';

import { IconFireOffColor, IconFireOnColor } from 'components/ui/Colors';

const ListImgs = ({ imgs, imgsActiveInterval, imgsActive }) => {

  const [colorIconActive, setColorIconActive] = useState("");

  // Ativa/desativa a imagem em que o mouse está por cima.
  const setColorHandler = (key) => {
    if (key !== "") {
      setColorIconActive(key);
    }
    else {
      setColorIconActive("");
    }
  }

  // Seleciona uma imagem.
  const selectImgHandler = (img) => {
    imgsActiveInterval(img);
  }

  // Lista das imgagens.
  const listImgs = imgs.map((img) => {

    const index = imgsActive.map((item) => item.data.id).indexOf(img.id);
    let timer = 0;
    
    if (index !== -1) {
      timer = imgsActive[index].timer;
    }

    return (
      <ImgWrapper key={img.id} 
        onMouseEnter={() => setColorHandler(img.id)} 
        onMouseLeave={() => setColorHandler("")}
        onClick={() => selectImgHandler(img)}>
          <BackgroundImageWrapper url={img.urls.thumb}>
          </BackgroundImageWrapper>
          {
            index !== -1
            ?
            <TimerWrapper>
              <TimerTextWrapper>{timer}</TimerTextWrapper>
            </TimerWrapper>
            :
            <IconWrapper>
              <FontAwesomeIcon icon={faFire} 
                size="2x"
                color={colorIconActive === img.id ? IconFireOffColor : IconFireOnColor } />
            </IconWrapper>
          }
      </ImgWrapper>
    );
  });

  return (
    <ListImgsWrapper>
      { listImgs }
    </ListImgsWrapper>
  );
}

export default ListImgs;
