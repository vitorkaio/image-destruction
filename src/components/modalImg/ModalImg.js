import React from "react";
import { ModalImgCss, HeaderModalCss, ContentModalCss, TimerHeaderModalCss, IconHeaderModalCss,
TimerBorderHeaderModalCss, TimerTextHeaderModalCss, BackgroundImageModalCss } from "./ModalImgStyled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Spacer from 'components/ui/Spacer';
import { PrimaryColor } from 'components/ui/Colors';

const ModalImg = ({ imgSelected, closeModalHandler }) => {

  const onCloseHandler = () => {
    closeModalHandler();
  }

  return (
    <ModalImgCss>
      <IconHeaderModalCss>
          <FontAwesomeIcon icon={faTimes} onClick={onCloseHandler}
            size="1x"
            color={PrimaryColor} />
        </IconHeaderModalCss>
      <HeaderModalCss>

        <Spacer flex={1}/>

        <TimerHeaderModalCss>
          <TimerBorderHeaderModalCss>
            <TimerTextHeaderModalCss>
              { imgSelected.timer }
            </TimerTextHeaderModalCss>
          </TimerBorderHeaderModalCss>
        </TimerHeaderModalCss>

        <Spacer flex={1}/>
        
      </HeaderModalCss>
      
      <ContentModalCss>
        <BackgroundImageModalCss url={imgSelected.data.urls.full}>

        </BackgroundImageModalCss>
      </ContentModalCss>
      
    </ModalImgCss>
  );
}

export default ModalImg;
