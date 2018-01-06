 import _ from 'lodash';
 import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
 import YTSearch from 'youtube-api-search';
 import SearchBar from './components/search_bar';
 import VideoList from './components/video_list';
 import VideoDetail from './components/video_detail';

 const API_KEY = 'AIzaSyArYjJ5-4YSd6XKsIe0Ylay851HB_XJjA4';

 //criar um novo componente que irá gerar algum codigo HTML
 class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

         this.videoSearch('music video');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
             });
            //{videos: videos}
        });
    }

     render() {
         const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);
        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            />
        </div>
        );
    }
 }


 //pegar o HTML gerado pelo componente e  inserir na pagina (DOM)
 ReactDOM.render(<App />, document.querySelector('.container'));

