import {ApiRequest, Languages, WeatherDTO} from '@weather/general';
import {LocationObject} from 'expo-location';

let abortController: AbortController;

export function getWeather(
	position: LocationObject,
	days = 1,
	language: Languages
): Promise<WeatherDTO | undefined> {
	if (abortController) {
		abortController.abort();
	}

	abortController = new AbortController();

	return new ApiRequest('forecast.json', 'GET')
		.setSecured()
		.addSignal(abortController.signal)
		.addQuery('q', `${position.coords.latitude},${position.coords.longitude}`)
		.addQuery('days', days.toString())
		.addQuery('lang', language)
		.executeAsJson<WeatherDTO>();
}

