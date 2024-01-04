import {Payload} from '@weather/general';

export type State = {
  isLoggedIn: boolean
};

export type Type = {
  setIsLogged: (state: State, action: Payload<State>) => void
};
