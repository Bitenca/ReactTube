import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const ImageURL = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className='content'>
            <div className='media'>
                <div className='media-left'>
                    <img className='image is-centered' src={ImageURL} alt='' />
                </div>
                <div className='media-content'>
                    <div className='panel-block'>
                    {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
