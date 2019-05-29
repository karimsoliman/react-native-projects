import React from 'react';
import {FlatList, View} from 'react-native';
import PlaceItem from './PlaceItem';

const PlaceList = (props) => {

    renderItem = (place) => {
        return(
            <PlaceItem 
                place={place.item}
                whenPressed={() => props.onItemPressed(place.item.id)}
            />
        );
    };


    return(
        <FlatList 
            data={props.places}
            keyExtractor= {place => place.id.toString()}
            renderItem={this.renderItem}
        />
    );
};

export default PlaceList;