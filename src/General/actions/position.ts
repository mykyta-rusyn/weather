import {showAlertLocationDisabled} from './alert';

import {getCurrentPositionAsync, LocationObject} from 'expo-location';

let savedPosition: LocationObject;

export function fetchPosition(
	callback: (position: LocationObject) => void
): Promise<void> {
	return getCurrentPositionAsync({
		mayShowUserSettingsDialog: true
	}).then((position) => {
		savedPosition = position;
	})
		.catch(() => showAlertLocationDisabled(!!savedPosition))
		.finally(() => savedPosition && callback(savedPosition));
}
