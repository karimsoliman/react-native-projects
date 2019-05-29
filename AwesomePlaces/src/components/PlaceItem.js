import React from 'react';
import {Text, View, TouchableWithoutFeedback, StyleSheet, Image} from 'react-native';

const PlaceItem = ({place, whenPressed}) => {
    return (
        <TouchableWithoutFeedback onPress={whenPressed}>
             <View style={styles.placeItemContainer}>
                
                <Image resizeMode="contain" style={{width:30, height: 30, marginRight: 8}} source={place.image}/>

                <Text>
                    {place.name}
                </Text>

            </View>
        </TouchableWithoutFeedback> 
    );
};

const styles = StyleSheet.create({
    placeItemContainer: {
        marginBottom: 5,
        backgroundColor: "#eee",
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default PlaceItem;
