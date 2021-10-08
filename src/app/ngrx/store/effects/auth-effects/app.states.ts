import { State } from "../../reducers/auth-reducer/auth.reducers";

// import * as auth from './ngrx/store/reducers/auth.reducers';
export interface AppState {
  authState: State;
}
