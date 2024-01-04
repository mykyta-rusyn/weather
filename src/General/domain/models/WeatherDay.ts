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
