import React from 'react';
import { createGlobalStyle } from 'styled-components';

import MainCard from './components/MainCard';
import GithubCard from './components/GithubCard';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

class App extends React.Component {
  state = {
    data: [],
    user: 'jonathan-yunghsin-ho',
    followers: [],
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));

    fetch(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => res.json())
      .then(res => this.setState({ followers: res }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.followers);
    return (
      <div className='App'>
        <h1>Github User Search</h1>
        <GlobalStyle />
        <MainCard data={this.state.data} />
        {this.state.followers.map(user => (
          <GithubCard data={user} />
        ))}
      </div>
    );
  }
}

export default App;
