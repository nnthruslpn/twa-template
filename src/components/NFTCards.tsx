import React from 'react';

const ImageGrid = () => {
  const images = [
    { id: 5983, src: 'https://art.kartinkof.club/uploads/posts/2023-07/1689110576_art-kartinkof-club-p-idei-dlya-srisovki-neiron-28.jpg' },
    { id: 8620, src: 'https://art.kartinkof.club/uploads/posts/2023-07/1689110576_art-kartinkof-club-p-idei-dlya-srisovki-neiron-28.jpg' },
    { id: 7169, src: 'https://art.kartinkof.club/uploads/posts/2023-07/1689110576_art-kartinkof-club-p-idei-dlya-srisovki-neiron-28.jpg' },
    { id: 4974, src: 'https://art.kartinkof.club/uploads/posts/2023-07/1689110576_art-kartinkof-club-p-idei-dlya-srisovki-neiron-28.jpg' },
    { id: 1069, src: 'https://art.kartinkof.club/uploads/posts/2023-07/1689110576_art-kartinkof-club-p-idei-dlya-srisovki-neiron-28.jpg' },
    { id: 299, src: 'https://art.kartinkof.club/uploads/posts/2023-07/1689110576_art-kartinkof-club-p-idei-dlya-srisovki-neiron-28.jpg' },
    { id: 2666, src: 'https://art.kartinkof.club/uploads/posts/2023-07/1689110576_art-kartinkof-club-p-idei-dlya-srisovki-neiron-28.jpg' },
    { id: 5155, src: 'https://art.kartinkof.club/uploads/posts/2023-07/1689110576_art-kartinkof-club-p-idei-dlya-srisovki-neiron-28.jpg' },
    { id: 9871, src: 'https://art.kartinkof.club/uploads/posts/2023-07/1689110576_art-kartinkof-club-p-idei-dlya-srisovki-neiron-28.jpg' },
    { id: 7084, src: 'https://art.kartinkof.club/uploads/posts/2023-07/1689110576_art-kartinkof-club-p-idei-dlya-srisovki-neiron-28.jpg' },
  ];

  return (
    
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="bg-gray-200 rounded-lg p-4">
          <img
            src={image.src}
            alt={`Image ${image.id}`}
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-2 text-center">
            <p>NO. {image.id}</p>
            <button className="buy-button">Купить</button> {/* добавляем кнопку "Купить" */}
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default ImageGrid;