import {RootState} from '../../store';

import {Payload, ThemeType} from '@weather/general';

export type State = {
  theme: ThemeType
};

export type Actions = {
  setTheme(state: State, action: Payload<ThemeType>): void;
  toggleTheme(state: State): void
};

export type Selectors = {
  theme(state: RootState): ThemeType
}
