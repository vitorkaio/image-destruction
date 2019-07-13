import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imgsActions from 'store/modules/imgs/actions';
import { HomeWrapper, LoadingWrapper } from './HomeStyled';
import ListImgs from 'components/listImgs/ListImgs';

const Home = ({ imgsReducer, imgsRequest, imgsActiveInterval }) => {
  
  useEffect(() => {
    const requestImgs = async () => {
      imgsRequest();
    }
    requestImgs();
  }, [imgsRequest]);

  const { load, imgs, imgsActive } = imgsReducer;

  return (
    <HomeWrapper>
      {
        load 
        ?
        <LoadingWrapper>
          <h3>Loading...</h3>
        </LoadingWrapper>
        :
        <ListImgs imgs={imgs} imgsActiveInterval={imgsActiveInterval} imgsActive={imgsActive} />
      }
    </HomeWrapper>
  );
};

const mapStateToProps = state => ({
  imgsReducer: state.imgsReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(imgsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
