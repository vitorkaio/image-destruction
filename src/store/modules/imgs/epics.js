import { filter, mergeMap } from 'rxjs/operators';
import * as typeActions from './typeActions';
import * as imgsActions from './actions';

import ImageService from 'services/imageService';

const reposEpic = action$ => action$.pipe(
  filter(action => action.type === typeActions.IMGS_REQUEST),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (action) => {

    const imageService = new ImageService();
    const imgs = await imageService.getRandomImage();

    if (imgs) {
      return imgsActions.imgsSuccess(imgs);
    }
    
    return imgsActions.imgsFail();
  }),
);

export default reposEpic;
