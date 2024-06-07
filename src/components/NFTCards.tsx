import React from 'react';
import styled from 'styled-components';

interface CardProps {
  rank: number;
  tokenId: number;
}

const Card: React.FC<CardProps> = ({ rank, tokenId }) => {
  return (
    <CardContainer>
      <Rank>{rank}</Rank>
      <TokenId>{tokenId}</TokenId>
      <Image src={`https://example.com/images/turtles/${tokenId}.png`} alt={`Turtle #${tokenId}`} />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
`;

const Rank = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TokenId = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
`;

export default Card;
