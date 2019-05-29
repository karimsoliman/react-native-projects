import React, {Component} from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {deletePlace} from '../store/actions';
import {connect} from 'react-redux';

class placeDetail extends Component {

  onDeletePress = () => {
    this.props.DeletePlace(this.props.selectedPlace.id);
    this.props.navigator.pop();
  };

  render(){
    return(
      <View style={styles.Container}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.onDeletePress}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: "red" }}>
              <Icon name="delete" color="white" size={20} />
              <Text style={{ color: "white", fontFamily: 'Arial', fontSize: 20 }}>
                Delete
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  Container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    DeletePlace: (id) => dispatch(deletePlace(id)) 
  };
};

export default connect(null, mapDispatchToProps)(placeDetail);
