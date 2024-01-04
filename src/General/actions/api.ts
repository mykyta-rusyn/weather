import {WeatherDTO} from '../domain';

import Constants from 'expo-constants';
import {LocationObject} from 'expo-location';

const baseUrl = 'http://api.weatherapi.com/v1';

const apiKey = `key=${Constants.expoConfig!.extra!.wetherApiKey}`;

function createQParameter(position: LocationObject): string {
	return `q=${position.coords.latitude},${position.coords.longitude}`;
}

export async function getWeather(
	position: LocationObject,
	days = 1,
	language: string
): Promise<WeatherDTO | undefined> {
	const response = await fetch(
		`${baseUrl}/forecast.json?${apiKey}&${createQParameter(position)}&days=${days}&lang=${language}`,
		{method: 'GET'}
	);

	if (!response.ok) {
		return undefined;
	}

	return await response.json();
}
