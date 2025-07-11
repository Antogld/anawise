import React from 'react';

interface StoryItemProps {
  username: string;
  avatar: string;
  isViewed: boolean;
}

const StoryItem: React.FC<StoryItemProps> = ({ username, avatar, isViewed }) => {
  return (
    <div className="flex flex-col items-center mr-4">
      <div className={`p-0.5 rounded-full ${isViewed ? 'bg-gray-300' : 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'}`}>
        <div className="bg-white p-0.5 rounded-full">
          <img 
            src={avatar} 
            alt={username} 
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
      </div>
      <p className="text-xs mt-1 text-center text-gray-700 truncate w-16">{username}</p>
    </div>
  );
};

export default StoryItem;
