"use client";

import React, { useEffect, useState } from "react";

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Page = () => {
  const [photos, setPhoto] = useState<IPhoto[]>([]);

  useEffect(() => {
    const fetchPhoto = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data: IPhoto[] = await response.json();
      setPhoto(data.slice(0, 20)); 
    };

    fetchPhoto();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="flex flex-col items-center bg-white border rounded-lg shadow-md p-4"
        >
          <img
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="rounded-md mb-4 w-32 h-32 object-cover"
          />
          <h2 className="text-lg font-bold text-center mb-2">{photo.title}</h2>
          <p className="text-sm text-gray-500">Album ID: {photo.albumId}</p>
          <p className="text-sm text-gray-500">Photo ID: {photo.id}</p>
          <a
            href={photo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2"
          >
            View Full Image
          </a>
        </div>
      ))}
    </div>
  );
};

export default Page;
