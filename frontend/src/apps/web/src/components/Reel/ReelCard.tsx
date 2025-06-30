import React from 'react';

interface ReelCardProps {
  username: string;
  avatar: string;
  videoUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

const ReelCard: React.FC<ReelCardProps> = ({
  username,
  avatar,
  videoUrl,
  caption,
  likes,
  comments
}) => {
  return (
    <div className="bg-black relative w-full h-[600px] rounded-lg overflow-hidden">
      {/* Video placeholder */}
      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
        <img 
          src={videoUrl} 
          alt="Reel preview" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      </div>
      
      {/* User info */}
      <div className="absolute bottom-4 left-4 flex items-center">
        <img 
          src={avatar} 
          alt={username} 
          className="w-10 h-10 rounded-full border-2 border-white mr-2"
        />
        <span className="text-white font-semibold">{username}</span>
      </div>
      
      {/* Caption */}
      <div className="absolute bottom-16 left-4 right-4">
        <p className="text-white text-sm">{caption}</p>
      </div>
      
      {/* Actions */}
      <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-4">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="block text-xs">{likes}</span>
        </button>
        
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="block text-xs">{comments}</span>
        </button>
        
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReelCard;
