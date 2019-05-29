import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    // console.log(library);
    return <ListItem library={library.item} />;
  }

  render() {
    console.log(this.props);
    return (
        <FlatList
          data={this.props.librariesToshow}
          renderItem={this.renderItem}
          keyExtractor={library => library.id.toString()}
        />
    );
  }
}

const mapStateToprops = state => {
  return { librariesToshow: state.libraries };
};

export default connect(mapStateToprops)(LibraryList);
