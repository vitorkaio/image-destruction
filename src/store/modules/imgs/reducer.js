import * as typeActions from './typeActions';

const imgsInitial = {
  imgs: [],
  load: false,
  error: false,
  imgsActive: [],
  timer: 10,
  imgSelected: null
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

    case typeActions.IMGS_ACTIVE_INTERVAL_SUCCESS:
      return {
        ...state, imgsActive: [...state.imgsActive, action.payload.img]
      }

    case typeActions.IMGS_UPDATE_INTERVAL: {
      const imgs = [...state.imgsActive];

      const index = imgs.map((item) => item.data.id).indexOf(action.payload.img.data.id);
      imgs.splice(index, 1);
      imgs.push(action.payload.img);
      
      return {
        ...state, imgsActive: [...imgs], imgSelected: action.payload.img
      }
    }

    case typeActions.IMGS_REMOVE_INTERVAL: {
      const imgs = [...state.imgsActive];
      const index = imgs.map((item) => item.data.id).indexOf(action.payload.id);
      imgs.splice(index, 1);

      return {
        ...state, imgsActive: [...imgs]
      }
    }

    case typeActions.IMG_SELECTED: {
      return {
        ...state, imgSelected: action.payload.img
      }
    }

    case typeActions.IMG_DESELECT: {
      return {
        ...state, imgSelected: null
      }
    }

    default:
      return state;
  }
}; // Fim do reducers

export default imgsReducer;