import React from 'react';
import {View, Modal, Text, Button, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PlaceDetail = (props) => {
    let modalContent = null;

    if (props.place) {
        modalContent = (
        <View style={{marginBottom: 10}}>
            <Image style={{width: "100%", height: 300}} source={props.place.image}/>
            <Text style={{fontSize: 18, textAlign: 'center'}}>{props.place.name}</Text>
        </View>
        );
    }
    return(
        <Modal
            visible={props.modalVisible} 
            animationType="slide"
            onRequestClose = {props.onBackRequest}
        >
            <View style={{margin: 20}}>
                {modalContent}
                <View>
                    <TouchableOpacity onPress={props.onDeletePress}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor:"red"}}>
                            <Icon name="delete" color="white" size={20}/>
                            <Text style={{ color: "white",fontFamily: 'Arial', fontSize: 20 }}>
                                Delete
                            </Text>
                        </View>  
                    </TouchableOpacity>

                    <Button title="Close" onPress={props.onClosePress}/>
                </View>
            </View>
        </Modal>
    );
};

export default PlaceDetail;