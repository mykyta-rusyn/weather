import {Theme} from '@react-navigation/native';

import {Payload} from '@weather/general';

export type State = {
  theme: Theme
};

export type Type = {
  setTheme: (state: State, action: Payload<Theme | null>) => void;
  toggleTheme: (state: State) => void
};

