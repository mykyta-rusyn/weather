import {Alert} from 'react-native';

import {localize} from '../localization';

export function showAlertLocationDisabled(withoutPosition: boolean): void {
	Alert.alert(
		localize('location_disabled_title'),
		localize(`location_disabled_description_${withoutPosition}`),
		undefined,
		{cancelable: false}
	);
}
