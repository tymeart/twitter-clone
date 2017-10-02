import React, { Component } from 'react';
import './App.css';
import avatar from './avatar.png';
import TweetList from '../TweetList/TweetList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        tymeart: {
          givenName: 'Tiffany',
          avatar: {avatar},
          tweets: [
          {
            id: 0,
            content: 'I decided to make a Twitter clone in React, and one post can be divided into so many components! @o@',
            reactions: {
              comments: 1,
              retweets: 0,
              likes: 4
            }
          },
          {
            id: 1,
            content: 'Going to see the Munch exhibit at SFMOMA today!',
            reactions: {
              comments: 0,
              retweets: 0,
              likes: 0
            }
          }
          ]
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <TweetList user={this.state.user.tymeart}/>
      </div>
    );
  }
}

export default App;
