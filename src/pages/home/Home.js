import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imgsActions from 'store/modules/imgs/actions';

const Home = ({ imgsReducer, imgsRequest }) => {
  
  // Similar to componentDidMount:
  useEffect(() => {
    const requestImgs = async () => {
      imgsRequest();
    }
    requestImgs();
  }, [imgsRequest]);

  const {load, imgs} = imgsReducer;

  return (
    <div>
      {
        load 
        ?
        <h3>Loading...</h3>
        :
        <h4>Loaded!</h4>
      }
    </div>
  );
};

/* const mapStateToProps = (state) => ({
  reposReducer: state.reposReducer,
}); */

const mapStateToProps = state => ({
  imgsReducer: state.imgsReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(imgsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
