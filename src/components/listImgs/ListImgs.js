import React, { useState } from 'react';
import { ListImgsWrapper, ImgWrapper, IconWrapper, BackgroundImageWrapper } from './ListImgsStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons';

import { IconFireOffColor, IconFireOnColor } from 'components/ui/Colors';

const ListImgs = ({ imgs }) => {

  const [colorIconActive, setColorIconActive] = useState("");

  const setColorHandler = (key) => {
    if (key !== "") {
      setColorIconActive(key);
    }
    else {
      setColorIconActive("");
    }
  }

  const listImgs = imgs.map((img) => {
    return (
      <ImgWrapper key={img.id} 
        onMouseEnter={() => setColorHandler(img.id)} 
        onMouseLeave={() => setColorHandler("")}>
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
