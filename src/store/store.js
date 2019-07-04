import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import rootEpic from './modules/rootEpic';
import rootReducer from './modules/rootReducer';

const epicMiddleware = createEpicMiddleware();
const configureStore = createStore(rootReducer, applyMiddleware(epicMiddleware, logger));
epicMiddleware.run(rootEpic);

/* const epicMiddleware = createEpicMiddleware();
const createStoreWithMiddleware = applyMiddleware(logger, epicMiddleware)(createStore);
epicMiddleware.run(epicsRoots); */


export default configureStore;