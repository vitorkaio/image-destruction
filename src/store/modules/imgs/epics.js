import { filter, mergeMap } from 'rxjs/operators';
import * as typeActions from './typeActions';
import * as imgsActions from './actions';
import stores from 'store/store';

import ImageService from 'services/imageService';

const arrayInterval = [];

const startInterval = (id, timer) => {
  return setInterval(() => {
    console.log("start interval: ", id);
    // stores.dispatch(imgsActions.imgsActiveInterval(""));
    const img = [...stores.getState().imgsReducer.imgsActive];
    const arrayImage = img.filter((item) => item.data.id === id);
    const image = arrayImage.length !== 0 ? arrayImage.pop() : null;

    // console.log(img);

    if (image) {
      // console.log(image.timer);
      if (image.timer === 0) {
        stopInterval(image.data.id)
      }
      else {
        const newImg = {
          ...image,
          timer: image.timer - 1
        }
        stores.dispatch(imgsActions.imgsUpdateInterval(newImg));
      }
      // console.log(newImg.interval());
    }

  }, timer);
}

const stopInterval = (id) => {
  for (let cont = 0; cont < arrayInterval.length; cont++) {
    if (arrayInterval[cont].id === id) {
      const interval = arrayInterval[cont].interval;
      clearInterval(interval);
      arrayInterval.splice(cont, 1);
      stores.dispatch(imgsActions.imgsRemoveInterval(id));
      console.log("Finish: ", id);
      // console.log(arrayInterval);
    }
  }
}

export const imgsEpic = (action$, store) => action$.pipe(
  filter(action => action.type === typeActions.IMGS_REQUEST),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (action) => {

    const imageService = new ImageService();
    const imgs = await imageService.getRandomImage();

    if (imgs) {
      // const timer = store.value.imgsReducer.timer;
      return imgsActions.imgsSuccess(imgs);
    }
    
    return imgsActions.imgsFail();
  }),
);


// ******************************* IMGS ACTIVE *******************************

export const imgsActiveIntervalEpic = (action$, store) => action$.pipe(
  filter(action => action.type === typeActions.IMGS_ACTIVE_INTERVAL),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (action) => {

    const { payload } = action;
   /*  const imgInterval = [...store.value.imgsReducer.imgsActive];

    if (imgInterval.length !== 0) {
      return imgsActions.imgsActiveInterval("");
    } */
    
    // if (imgInterval.filter((item) => item.data.id === payload.img.id))

    const timer = store.value.imgsReducer.timer;

    const img = {
      data: payload.img,
      active: false,
      timer,
    }

    const intervalID = startInterval(img.data.id, 1e3);

    arrayInterval.push({
      id: payload.img.id,
      interval: intervalID
    });

    /* arrayInterval.forEach((item) => {
      if (item.id === img.data.id) {
        console.log(item.id);
        const inte = item.interval(item.id, 1e3);
        setTimeout(() => {
        clearInterval(inte);
        }, 2e3);
      }
    }) */

    return imgsActions.imgsActiveIntervalSuccess(img);

  }),
);
