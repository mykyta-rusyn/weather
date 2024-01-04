import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	root: {
		gap: 16,
		height: 35,
		alignItems: 'center',
	},
	period: {
		padding: 8,
		borderRadius: 15,
	},
	selectedPeriod: {
		opacity: 0.6
	}
});

export const selectedPeriod = StyleSheet.flatten([styles.period, styles.selectedPeriod]);
