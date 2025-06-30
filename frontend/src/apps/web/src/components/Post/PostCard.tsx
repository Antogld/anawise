import React from 'react';
import PostActions from './PostActions';

interface PostCardProps {
  username: string;
  avatar: string;
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

const PostCard: React.FC<PostCardProps> = ({
  username,
  avatar,
  timestamp,
  content,
  image,
  likes,
  comments,
  shares
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-4">
        <img 
          src={avatar} 
          alt={username} 
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-bold text-gray-800">{username}</h3>
          <p className="text-xs text-gray-500">{timestamp}</p>
        </div>
        <button className="ml-auto text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-700">{content}</p>
      </div>
      
      {image && (
        <div className="mb-4">
          <img 
            src={image} 
            alt="Post content" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
      
      <PostActions likes={likes} comments={comments} shares={shares} />
    </div>
  );
};

export default PostCard;
