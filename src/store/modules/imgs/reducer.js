import * as typeActions from './typeActions';

const imgsInitial = {
  imgs: [],
  load: false,
  error: false,
};

const imgsReducer = (state = imgsInitial, action) => {
  switch (action.type) {
    case typeActions.IMGS_REQUEST:
      return { ...state, load: true };
    case typeActions.IMGS_SUCCESS:
      return {
        ...state, imgs: action.payload.imgs, load: false, error: false,
      };
    case typeActions.IMGS_FAIL:
      return {
        ...state, imgs: [], load: false, error: true,
      };

    default:
      return state;
  }
}; // Fim do reducers

export default imgsReducer;