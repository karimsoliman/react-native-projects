import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import {connect} from 'react-redux';
import {placeNameChanged, addPlace} from '../../store/actions';

class PlaceInput extends Component {

  componentDidMount() {
    
  }

  placeNameChangedHandler = val => {
    this.props.PlaceNameChanged(val);
  };

  placeSubmitHandler = () => {
    if (this.props.placeName.trim() === "") {
      return;
    }

    this.props.AddPlace(this.props.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.props.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

const mapStateToProps = (state) => {
  return {
    placeName: state.places.placeName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    PlaceNameChanged: (placeName) => dispatch(placeNameChanged(placeName)),
    AddPlace: (placeName) => dispatch(addPlace(placeName)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceInput);
