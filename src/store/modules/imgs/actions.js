import { action } from 'typesafe-actions';
import * as typeActions from './typeActions';

export const imgsRequest = () => action(typeActions.IMGS_REQUEST);
export const imgsSuccess = imgs => action(typeActions.IMGS_SUCCESS, { imgs });
export const imgsFail = () => action(typeActions.IMGS_FAIL);

export const imgsActiveInterval = (img) => action(typeActions.IMGS_ACTIVE_INTERVAL, { img });
export const imgsActiveIntervalSuccess = (img) => action(typeActions.IMGS_ACTIVE_INTERVAL_SUCCESS, { img });

export const imgsUpdateInterval = (img) => action(typeActions.IMGS_UPDATE_INTERVAL, { img });
export const imgsRemoveInterval = (id) => action(typeActions.IMGS_REMOVE_INTERVAL, { id });

export const imgSelected = (img) => action(typeActions.IMG_SELECTED, { img });
export const imgDeselect = () => action(typeActions.IMG_DESELECT);

export const imgDelete = (id) => action(typeActions.IMG_DELETE, { id });
