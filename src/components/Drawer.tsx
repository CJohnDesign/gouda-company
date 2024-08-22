import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const songs = [
    "Woke Up This Morning",
    "Born Under a Bad Sign",
    "The Sopranos Theme",
    "Alabama 3 Greatest Hits",
    "Blues Walk Into Town",
    "One in a Million",
    "Bad Moon Rising",
    "The Chosen One",
  ];

  return (
    <div className={`bg-gray-800 text-white w-64 h-full fixed left-0 top-0 overflow-y-auto transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4">
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4">Song List</h2>
        <ul>
          {songs.map((song, index) => (
            <li key={index} className="mb-2">
              <button className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded transition duration-200">
                {song}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;