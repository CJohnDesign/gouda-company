import React from 'react';

const Lyrics: React.FC = () => {
  const lyrics = [
    ["You woke up this morning", "Got yourself a gun,", "Mama always said you'd be", "The Chosen One."],
    ["She said: You're one in a million", "You've got to burn to shine,", "You were born under a bad sign,", "With a blue moon in your eyes."],
    ["You woke up this morning", "All the love has gone,", "Your Papa never told you", "About right and wrong."],
    ["But you're looking good, baby,", "I believe you're feeling fine, (shame about it),", "Born under a bad sign", "With a blue moon in your eyes."],
    ["You woke up this morning", "The world turned upside down,", "Thing's ain't been the same", "Since the Blues walked into town."],
  ];

  return (
    <div className="bg-gray-900 text-white p-6">
      {lyrics.map((verse, index) => (
        <div key={index} className="mb-6 last:mb-0">
          {verse.map((line, lineIndex) => (
            <p key={lineIndex} className="text-xl leading-relaxed">{line}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Lyrics;
