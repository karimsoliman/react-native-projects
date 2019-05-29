import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const startTabs = () => Navigation.setRoot({
            root: {
                bottomTabs: {
                    id: "BottomTabsId",
                    children: [
                        {
                            component: {
                                name: 'awesomePlaces.findPlaceScreen',
                                options: {
                                    bottomTab: {
                                        fontSize: 12,
                                        text: 'find place'
                                    }
                                }
                            },
                        },
                        {
                            component: {
                                name: 'awesomePlaces.sharePlaceScreen',
                                options: {
                                    bottomTab: {
                                        fontSize: 12,
                                        text: 'share palce'
                                    }
                                }
                            },
                        },
                    ],
                }
            }
});
