import React from 'react';

const GithubCard = props => {
  return (
    <div>
      <img alt={props.data.name} src={props.data.avatar_url} />
      <div>
        <h2>{props.data.name}</h2>
        <h3>{props.data.login}</h3>
        {props.data.location && <p>Location: {props.data.location}</p>}
        <p>Profile: {props.data.html_url}</p>
        {props.data.followers && <p>Followers: {props.data.followers}</p>}
        {props.data.following && <p>Following: {props.data.following}</p>}
        {props.data.bio && <p>Bio: {props.data.bio}</p>}
      </div>
    </div>
  );
};

export default GithubCard;
