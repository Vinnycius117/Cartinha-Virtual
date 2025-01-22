import React from 'react';

export default function Photos() {
  const photos = [
    {
      url: 'images/primeiro_encontro.jpg',
      caption: 'Nosso primeiro encontro'
    },
    {
      url: 'images/espontânea.jpg',
      caption: 'Momentos especiais'
    },
    {
      url: 'images/zoinho.jpg',
      caption: 'Meu Lar'
    },
    
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-4 font-great-vibes text-2xl">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}