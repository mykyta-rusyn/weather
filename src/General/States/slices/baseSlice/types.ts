import {Payload, ThemeType} from '@weather/general';

export type State = {
  theme: ThemeType
};

export type Type = {
  setTheme: (state: State, action: Payload<ThemeType>) => void;
  toggleTheme: (state: State) => void
};

