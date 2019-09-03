import React from 'react';

const GithubCard = props => {
  return (
    <div>
      <img alt={props.data.name} src={props.data.avatar_url} />
      <div>
        <h2>{props.data.name}</h2>
        <h3>{props.data.login}</h3>
        <p>Location: {props.data.location}</p>
        <p>Profile: {props.data.html_url}</p>
        <p>Followers: {props.data.followers}</p>
        <p>Following: </p>
        <p>Bio: {props.data.bio}</p>
      </div>
    </div>
  );
};

export default GithubCard;
