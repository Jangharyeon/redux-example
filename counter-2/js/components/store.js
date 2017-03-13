import { createStore } from 'redux';
import counter from './reducer';

export default function configureStore() {
  return createStore(counter);
}
