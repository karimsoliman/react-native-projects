import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager } from 'react-native';
import { CardSection, Description } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  renderDescription() {
    const { library, expand } = this.props;
    if (expand) {
      return (
        <Description>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </Description>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
//    console.log(this.props);
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 10,
  }
};

const mapStateToprops = (state, ownProps) => {
  /* onwProps is the same as this.props, whenever mapStateToprops is called,
   it is called with the props of the component
  */
  const expand = ownProps.library.id === state.selectedLibraryId;
  return { expand };
};

export default connect(mapStateToprops, actions)(ListItem);
