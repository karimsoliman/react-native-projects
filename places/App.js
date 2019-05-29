import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import Auth from './src/screens/Auth';
import FindPlace from './src/screens/FindPlace';
import SharePlace from './src/screens/SharePlace';
import PlaceDetail from './src/screens/PlaceDetail';
import configureStore from './src/store/ConfigureStore';

const store = configureStore();

Navigation.registerComponent('places.AuthScreen', () => Auth, store, Provider);
Navigation.registerComponent('places.FindPlaceScreen', () => FindPlace, store, Provider);
Navigation.registerComponent('places.SharePlaceScreen', () => SharePlace, store, Provider);
Navigation.registerComponent('places.PlaceDetailScreen', () => PlaceDetail, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'places.AuthScreen',
    title: 'login'
  }
});
