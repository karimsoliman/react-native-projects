import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("map", 30),
        Icon.getImageSource("share", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "places.FindPlaceScreen",
                    title: "Find place",
                    label: "Find place",
                    icon: sources[0]
                },
                {
                    screen: "places.SharePlaceScreen",
                    title: "Share place",
                    label: "Share place",
                    icon: sources[1]
                }
            ]
        });
    });
};

export default startTabs;