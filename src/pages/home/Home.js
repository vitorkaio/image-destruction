import React, { useEffect, useState }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imgsActions from 'store/modules/imgs/actions';
import { HomeWrapper, LoadingWrapper } from './HomeStyled';
import ListImgs from 'components/listImgs/ListImgs';
import ModalImg from 'components/modalImg/ModalImg';

const Home = ({ imgsReducer, imgsRequest, imgsActiveInterval, imgDeselect }) => {

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  }

  const closeModalHandler = () => {
    setOpenModal(false);
  }

  useEffect(() => {
    const requestImgs = async () => {
      imgsRequest();
    }
    requestImgs();
  }, [imgsRequest]);

  
 const imgDeselectHandler = () => {
  imgDeselect();
 }

  const { load, imgs, imgsActive, imgSelected } = imgsReducer;

  const showListImg = () => {
    return (
      <>
        <ListImgs imgs={imgs} 
          imgsActiveInterval={imgsActiveInterval} 
          imgsActive={imgsActive} 
          openModalHandler={openModalHandler} />
        {
          imgSelected && openModal
          ?
          <ModalImg imgSelected={imgSelected} 
            imgDeselectHandler={imgDeselectHandler}
            closeModalHandler={closeModalHandler} />
          :
          null
        }
      </>
    );
  }

  return (
    <HomeWrapper>
       {
          load 
          ?
          <LoadingWrapper>
            <h3>Loading...</h3>
          </LoadingWrapper>
          :
          showListImg()
        }
    </HomeWrapper>
  );
};

const mapStateToProps = state => ({
  imgsReducer: state.imgsReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(imgsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
