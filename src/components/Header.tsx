import React from 'react';

interface HeaderProps {
  onOpenDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDrawer }) => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          
          <div>
            <h1 className="text-3xl font-bold">Woke Up This Morning</h1>
            <p className="text-xl text-gray-400">Alabama 3 (Sopranos Theme)</p>
          </div>
        </div>
        <div className="text-3xl">
        <button 
            onClick={onOpenDrawer}
            className="mr-4 text-2xl hover:text-gray-300 transition-colors"
          >
            🎵
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;