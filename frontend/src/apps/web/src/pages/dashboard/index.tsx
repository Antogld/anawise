import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import Sidebar from '../../components/Layout/Sidebar';
import PostCard from '../../components/Post/PostCard';
import StoryItem from '../../components/Story/StoryItem';
import ReelCard from '../../components/Reel/ReelCard';

const Dashboard: React.FC = () => {
  // Dati di esempio per i post
  const posts = [
    {
      id: 1,
      username: 'mario_rossi',
      avatar: 'https://via.placeholder.com/40',
      timestamp: '2 ore fa',
      content: 'Oggi è una bellissima giornata! #sole #estate',
      image: 'https://via.placeholder.com/600x400',
      likes: 120,
      comments: 24,
      shares: 5
    },
    {
      id: 2,
      username: 'giulia_bianchi',
      avatar: 'https://via.placeholder.com/40',
      timestamp: '4 ore fa',
      content: 'Nuovo progetto in arrivo! Non vedo l\'ora di condividerlo con voi tutti. #design #creatività',
      likes: 85,
      comments: 12,
      shares: 2
    },
    {
      id: 3,
      username: 'luca_verdi',
      avatar: 'https://via.placeholder.com/40',
      timestamp: 'Ieri',
      content: 'Viaggio fantastico a Parigi! Ecco alcune foto della Torre Eiffel.',
      image: 'https://via.placeholder.com/600x400',
      likes: 230,
      comments: 45,
      shares: 18
    }
  ];

  // Dati di esempio per le storie
  const stories = [
    { id: 1, username: 'mario_rossi', avatar: 'https://via.placeholder.com/40', isViewed: false },
    { id: 2, username: 'giulia_bianchi', avatar: 'https://via.placeholder.com/40', isViewed: false },
    { id: 3, username: 'luca_verdi', avatar: 'https://via.placeholder.com/40', isViewed: true },
    { id: 4, username: 'anna_neri', avatar: 'https://via.placeholder.com/40', isViewed: false },
    { id: 5, username: 'marco_blu', avatar: 'https://via.placeholder.com/40', isViewed: true }
  ];

  // Dati di esempio per i reels
  const reels = [
    {
      id: 1,
      username: 'anna_neri',
      avatar: 'https://via.placeholder.com/40',
      videoUrl: 'https://via.placeholder.com/400x600',
      caption: 'Il mio nuovo balletto! #dance #trend',
      likes: 1200,
      comments: 145
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="flex">
          <Sidebar />
          <div className="ml-64 flex-1 p-6">
            {/* Sezione Storie */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-semibold mb-4">Storie</h3>
              <div className="flex overflow-x-auto pb-2">
                {stories.map(story => (
                  <StoryItem
                    key={story.id}
                    username={story.username}
                    avatar={story.avatar}
                    isViewed={story.isViewed}
                  />
                ))}
              </div>
            </div>

            {/* Feed principale */}
            <div className="flex space-x-6">
              {/* Colonna principale dei post */}
              <div className="w-2/3">
                {posts.map(post => (
                  <PostCard
                    key={post.id}
                    username={post.username}
                    avatar={post.avatar}
                    timestamp={post.timestamp}
                    content={post.content}
                    image={post.image}
                    likes={post.likes}
                    comments={post.comments}
                    shares={post.shares}
                  />
                ))}
              </div>

              {/* Colonna laterale con reels e suggerimenti */}
              <div className="w-1/3">
                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                  <h3 className="text-lg font-semibold mb-4">Reels</h3>
                  {reels.map(reel => (
                    <ReelCard
                      key={reel.id}
                      username={reel.username}
                      avatar={reel.avatar}
                      videoUrl={reel.videoUrl}
                      caption={reel.caption}
                      likes={reel.likes}
                      comments={reel.comments}
                    />
                  ))}
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Suggerimenti</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map(id => (
                      <div key={id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img 
                            src={`https://via.placeholder.com/40`} 
                            alt="Utente suggerito" 
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <h4 className="font-medium text-sm">utente_{id}</h4>
                            <p className="text-xs text-gray-500">Seguito da utente_x</p>
                          </div>
                        </div>
                        <button className="text-blue-500 text-sm font-medium">Segui</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
