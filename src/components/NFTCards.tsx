import React from 'react';
import  Image  from './styled/styled';

interface NFT {
  id: number;
  name: string;
  image: string;
  description: string;
}

const NFTCollection: React.FC = () => {
  const nfts: NFT[] = [
    {
      id: 1,
      name: 'NFT 1',
      image: 'https://i.pinimg.com/originals/0e/02/25/0e0225da271d1600426fa946d2b2cf27.jpg',
      description: 'This is NFT 1',
    },
    {
      id: 2,
      name: 'NFT 2',
      image: 'https://art.kartinkof.club/uploads/posts/2023-07/1689110576_art-kartinkof-club-p-idei-dlya-srisovki-neiron-28.jpg',
      description: 'This is NFT 2',
    },
    // Add more NFTs to the array
  ];

  return (
    <div>
      <h2>NFT Collection</h2>
      <ul>
        {nfts.map((nft) => (
          <li key={nft.id}>
            <Image src={nft.image} alt={nft.name} />
            <h3>{nft.name}</h3>
            <p>{nft.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default NFTCollection;