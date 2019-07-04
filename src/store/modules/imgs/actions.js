import { action } from 'typesafe-actions';
import * as typeActions from './typeActions';

export const imgsRequest = () => action(typeActions.IMGS_REQUEST);
export const imgsSuccess = imgs => action(typeActions.IMGS_SUCCESS, { imgs });
export const imgsFail = () => action(typeActions.IMGS_FAIL);
