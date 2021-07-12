import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import YouTube from 'react-youtube';

class Vol extends React.Component {
    
    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };
    
        return (
          <div class="slide" >
            <div style={{"margin":"1%"}}>
            <Carousel>
            <div>
            <YouTube videoId="Quenz6rpz3k" opts={opts} onReady={this._onReady} />
            </div>
            <p className="legend">Legend 1</p>

            <div>
            <YouTube videoId="Quenz6rpz3k" opts={opts} onReady={this._onReady} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
            <YouTube videoId="Quenz6rpz3k" opts={opts} onReady={this._onReady} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        </div>
        </div>
            );
      }
    
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    }

export default Vol;
