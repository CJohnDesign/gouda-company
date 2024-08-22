import React from 'react';
import Header from '../components/Header';
import Chords from '../components/Chords';
import Lyrics from '../components/Lyrics';

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen text-white p-4">
      <div className="max-w-2xl mx-auto">
        <Chords />
        <Lyrics />
      </div>
    </main>
  );
}