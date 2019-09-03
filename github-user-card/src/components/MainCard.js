import React from 'react';
import GithubCard from './GithubCard';

const MainCard = props => {
  return (
    <div>
      <GithubCard data={props.data} />
    </div>
  );
};

export default MainCard;
