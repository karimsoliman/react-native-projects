import {Navigation} from 'react-native-navigation';
import AuthScreen from './screens/Auth';
import FindPlace from './screens/FindPlace';
import SharePlace from './screens/SharePlace';

//register component (screen)
Navigation.registerComponent("awesomePlaces.authScreen", () => AuthScreen);
Navigation.registerComponent("awesomePlaces.findPlaceScreen", () => FindPlace);
Navigation.registerComponent("awesomePlaces.sharePlaceScreen", () => SharePlace);


// start app
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'awesomePlaces.authScreen',
        options: {
          topBar:{
            title:{
              text: 'welcome'
            }
          }
        }
      }
    }
  });
});
