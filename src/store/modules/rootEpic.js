import { combineEpics } from 'redux-observable';
import imgsEpic from './imgs/epics';

const epics = [
  imgsEpic,
];

const epicsRoots = combineEpics(...epics);

export default epicsRoots;