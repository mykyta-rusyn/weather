import {StackScreenProps} from '@react-navigation/stack';

export type Params = undefined;

export type HomeScreenParam = {
  HomeScreen: Params
};

export type Props = StackScreenProps<HomeScreenParam, 'HomeScreen'>;