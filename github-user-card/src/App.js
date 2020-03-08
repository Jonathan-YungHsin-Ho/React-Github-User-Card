import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import MainCard from './components/MainCard';
import GithubCard from './components/GithubCard';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  .center {
    text-align: center;
  }
`;

const SearchBar = styled.div`
  background-color: #24292e;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 0;
    color: #e8e8e8;
    font-size: 28px;

    .no-bold {
      font-weight: normal;
    }
  }

  input {
    background-color: #3f4448;
    width: 70%;
    color: #8d908d;
    border: none;
    outline: none;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding: 8px;
  }

  button {
    margin-left: 10px;
    border: none;
    outline: none;
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #8d908d;
    }
  }
`;

class App extends React.Component {
  state = {
    data: [],
    user: 'jonathan-yunghsin-ho',
    followers: [],
    followersData: [],
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

    // fetch(`https://api.github.com/users/${this.state.user}/followers`)
    //   .then(res => res.json())
    //   .then(res =>
    //     res.map(user => {
    //       fetch(`https://api.github.com/users/${user.login}`)
    //         .then(res => res.json())
    //         .then(data => {
    //           this.setState({
    //             followersData: [...this.state.followersData, data],
    //           });
    //         })
    //         .catch(err => console.log(err));
    //     }),
    //   )
    //   .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      window.scrollTo(0, 0);
    }
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  fetchUser = () => {
    fetch(`https://api.github.com/users/${this.state.search}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));

    fetch(`https://api.github.com/users/${this.state.search}/followers`)
      .then(res => res.json())
      .then(res => this.setState({ followers: res }))
      .catch(err => console.log(err));

    this.setState({ search: '' });
  };

  handleClick = user => {
    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));

    fetch(`https://api.github.com/users/${user}/followers`)
      .then(res => res.json())
      .then(res => this.setState({ followers: res }))
      .catch(err => console.log(err));
  };

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      console.log('enter');
      this.fetchUser();
    }
  };

  render() {
    console.log('Followers', this.state.followers);
    return (
      <div className='App'>
        <SearchBar>
          <div>
            <input
              type='text'
              placeholder='Look up GitHub user...'
              value={this.state.search}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
            <button onClick={this.fetchUser}>Go!</button>
          </div>
          <h1>
            GitHub <span className='no-bold'>User Lookup</span>
          </h1>
        </SearchBar>
        <GlobalStyle />
        <MainCard data={this.state.data} handleClick={this.handleClick} />
        <div className='center'>
          <h2>Followers:</h2>
        </div>
        {this.state.followers.map(user => (
          <GithubCard
            key={user.id}
            data={user}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
