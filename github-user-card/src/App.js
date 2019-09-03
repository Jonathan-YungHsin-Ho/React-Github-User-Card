import React from 'react';

import MainCard from './components/MainCard';
import GithubCard from './components/GithubCard';

class App extends React.Component {
  state = {
    data: [],
    user: 'jonathan-yunghsin-ho',
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='App'>
        <h1>Github User Search</h1>
        <MainCard data={this.state.data} />
      </div>
    );
  }
}

export default App;
