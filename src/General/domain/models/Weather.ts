export type PeriodIndex = 0 | 1 | 2 | 3

export type WeatherPeriodLiteral = 'one' | 'tree' | 'week' | 'twoWeek';

export type WeatherPeriodNumber = 1 | 3 | 7 | 14

export type Period = {
	literal: WeatherPeriodLiteral;
	number: WeatherPeriodNumber
};

export type Periods = {
  [key in PeriodIndex as number]: Period
};

export type WeatherDay = {
	date: string;
	day: {
		maxtemp_c: number;
		mintemp_c: number;
		maxwind_kph: number;
		daily_chance_of_rain: number;
		condition: {
			text: string;
			icon: string
		}
	}
}
