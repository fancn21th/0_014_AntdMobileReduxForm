import { testSaga } from './components/Register/sagas';

export default function* rootSaga() {
  yield [
    testSaga(),
  ];
}

