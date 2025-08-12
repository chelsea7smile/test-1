import React, { useState } from 'react';
import ChatPanel from './ChatPanel';
import PreviewPane from './PreviewPane';

interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div 
        className="flex rounded-[22px] overflow-hidden shadow-2xl mt-8"
        style={{ 
          width: isChatOpen ? '1440px' : '978px', 
          height: '900px' 
        }}
      >
        {isChatOpen && (
          <>
            <ChatPanel />
            <div className="w-2 bg-white"></div>
          </>
        )}
        
        <PreviewPane onToggleChat={toggleChat} />
      </div>
    </div>
  );
};

export default AppLayout; 