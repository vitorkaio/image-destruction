import React, { useState } from 'react';
import { ListImgsWrapper, ImgWrapper, IconWrapper, BackgroundImageWrapper } from './ListImgsStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons';

import { IconFireOffColor, IconFireOnColor } from 'components/ui/Colors';

let interval = null;
let contador = 0;

const ListImgs = ({ imgs, imgsActiveInterval, imgsActive }) => {

  console.log(imgsActive);

  const [colorIconActive, setColorIconActive] = useState("");
  const [contTest, setContTest] = useState(0);

  // Ativa/desativa a imagem em que o mouse está por cima.
  const setColorHandler = (key) => {
    if (key !== "") {
      setColorIconActive(key);
    }
    else {
      setColorIconActive("");
    }
  }

  if (contTest === 5) {
    console.log("Finish");
    clearInterval(interval);
    contador = 0;
    setContTest(contador);
  }


  // Seleciona uma imagem.
  const selectImgHandler = (img) => {
    imgsActiveInterval(img);
   /*  interval = setInterval(() => {
      console.log(img.id, contador + 1);
      contador++;
      setContTest(contador);
    }, 1e3); */
  }

  // Lista das imgagens.
  const listImgs = imgs.map((img) => {
    return (
      <ImgWrapper key={img.id} 
        onMouseEnter={() => setColorHandler(img.id)} 
        onMouseLeave={() => setColorHandler("")}
        onClick={() => selectImgHandler(img)}>
          <BackgroundImageWrapper url={img.urls.thumb}>
          </BackgroundImageWrapper>
          <IconWrapper>
              <FontAwesomeIcon icon={faFire} 
                size="2x"
                color={colorIconActive === img.id ? IconFireOnColor : IconFireOffColor} />
            </IconWrapper>
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
