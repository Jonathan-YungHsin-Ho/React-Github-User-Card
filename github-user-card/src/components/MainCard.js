import React from 'react';
import styled from 'styled-components';

import GithubCard from './GithubCard';

const MainCardStyle = styled.div`
  .card {
    max-width: 1000px;
  }
  img {
    max-width: 275px;
  }
`;

const MainCard = props => {
  return (
    <MainCardStyle>
      <GithubCard data={props.data} />
    </MainCardStyle>
  );
};

export default MainCard;
