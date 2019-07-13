import { combineEpics } from 'redux-observable';
import { imgsEpic, imgsActiveIntervalEpic } from './imgs/epics';

const epics = [
  imgsEpic,
  imgsActiveIntervalEpic
];

const epicsRoots = combineEpics(...epics);

export default epicsRoots;