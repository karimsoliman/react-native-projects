// import libraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// create component
class AlbumList extends Component {

  state = { albums: [] };

  componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(currentAlbum =>
       <AlbumDetail key={currentAlbum.title} album={currentAlbum} />
     );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// render or export component
export default AlbumList;
