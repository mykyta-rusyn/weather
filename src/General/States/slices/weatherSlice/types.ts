import {RootState} from '../../store';

import {Payload, Period, Periods, WeatherDTO} from '@weather/general';

export type State = {
  activePeriod: Period;
  periods: Periods;
  isLoading: boolean;
  weather?: WeatherDTO
};

export type Actions = {
  setActivePeriod(state: State, action: Payload<Period>): void;
  toggleLoading(state: State): void;
  setWeather(state: State, action: Payload<WeatherDTO | undefined>): void
};

export type Selectors = {
  activePeriod(state: RootState): Period;
  periods(state: RootState): Periods;
  loading(state: RootState): boolean;
  weather(state: RootState): WeatherDTO | undefined
}
