import {WeatherDay} from '../models';

export type WeatherDTO = {
	forecast: {
		forecastday: WeatherDay[]
	}
}
