import React from "react";
import { ModalImgCss, HeaderModalCss, ContentModalCss, TimerHeaderModalCss, IconHeaderModalCss,
TimerBorderHeaderModalCss, TimerTextHeaderModalCss } from "./ModalImgStyled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Spacer from 'components/ui/Spacer';

const ModalImg = ({ imgSelected, closeModalHandler }) => {

  const onCloseHandler = () => {
    closeModalHandler();
  }

  return (
    <ModalImgCss>
      <HeaderModalCss>

        <Spacer flex={1}/>

        <TimerHeaderModalCss>
          <TimerBorderHeaderModalCss>
            <TimerTextHeaderModalCss>
              { imgSelected.timer }
            </TimerTextHeaderModalCss>
          </TimerBorderHeaderModalCss>
        </TimerHeaderModalCss>

        <IconHeaderModalCss>
          <FontAwesomeIcon icon={faTimes} onClick={onCloseHandler}
            size="2x"
            color="black" />
        </IconHeaderModalCss>
        
      </HeaderModalCss>
      
      <ContentModalCss>
        <h5>ContentModalCss</h5>
      </ContentModalCss>
      
    </ModalImgCss>
  );
}

export default ModalImg;
