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
    search: '',
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

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  fetchUser = event => {
    fetch(`https://api.github.com/users/${this.state.search}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));

    fetch(`https://api.github.com/users/${this.state.search}/followers`)
      .then(res => res.json())
      .then(res => this.setState({ followers: res }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.followers);
    return (
      <div className='App'>
        <div>
          <input
            type='text'
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button onClick={this.fetchUser}>Search Github Users</button>
        </div>
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
