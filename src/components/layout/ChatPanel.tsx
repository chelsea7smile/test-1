import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';
import { Plus, Mic, ChevronUp, Settings, ArrowLeft, FileText, Link, Link2, Globe } from 'lucide-react';
import aiIcon from '../../assets/icons/ai-icon.png';
import sendButton from '../../assets/icons/send-button.png';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatPanelProps {}

const ChatPanel: React.FC<ChatPanelProps> = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('chatMessages');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      } catch (e) {
        console.error('Error parsing saved messages:', e);
      }
    }
    
    return [
      {
        id: '1',
        text: 'Create home page for my site!',
        isUser: true,
        timestamp: new Date()
      },
      {
        id: '2',
        text: "I'll create a modern, engaging homepage for that focuses on conversion optimization and funnel analytics. Let me build something that captures attention with dynamic visuals and clear value propositions.",
        isUser: false,
        timestamp: new Date()
      },
      {
        id: '3',
        text: 'Additional promt for AI here',
        isUser: true,
        timestamp: new Date()
      },
      {
        id: '4',
        text: 'Engaging homepage for that focuses on conversion optimization and funnel analytics. Let me build something that mic visuals.',
        isUser: false,
        timestamp: new Date()
      }
    ];
  });
  
  const [inputText, setInputText] = useState('');
  const [isAttachMenuOpen, setIsAttachMenuOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: inputText,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleMicClick = () => {
    console.log('Microphone clicked');
  };

  const handleAttachClick = (type: string) => {
    console.log(`${type} clicked`);
    setIsAttachMenuOpen(false);
  };

  return (
    <div className="w-[460px] h-[900px] flex flex-col" style={{ backgroundColor: '#F8F8FF' }}>
      <div className="p-4">
        <div className="relative">
          <Button 
            variant="outline" 
            className="bg-white text-left relative"
            style={{ 
              width: '211px', 
              height: '36px',
              paddingLeft: '10px',
              paddingTop: '8px',
              paddingBottom: '8px',
              paddingRight: '32px'
            }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-sm">cognism.page/get-started</span>
            <ChevronUp 
              className="absolute right-2 top-2 h-4 w-4" 
              style={{ 
                width: '16px', 
                height: '16px',
                right: '8px',
                top: '8px'
              }}
            />
          </Button>
          
          {isDropdownOpen && (
            <div className="absolute left-0 top-full mt-1 w-[280px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="h-[45px] flex items-center px-3 rounded-t-lg hover:bg-gray-50 cursor-pointer">
                <ArrowLeft className="mr-2.5 h-4 w-4" />
                Back to Dynamic Pages
              </div>
              <div className="h-[45px] flex items-center px-3 rounded-b-lg hover:bg-gray-50 cursor-pointer">
                <Settings className="mr-2.5 h-4 w-4" />
                Page Settings
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col justify-end">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-3 py-2 rounded-lg ${
                message.isUser
                  ? 'bg-white text-gray-900 max-w-xs'
                  : 'text-gray-900 w-full'
              }`}
            >
              {!message.isUser && (
                <div className="flex items-center mb-1">
                  <img 
                    src={aiIcon} 
                    alt="AI" 
                    className="w-3 h-3 mr-2"
                  />
                </div>
              )}
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4">
        <div className="bg-white rounded-[22px] p-4 flex items-center space-x-2">
          <DropdownMenu open={isAttachMenuOpen} onOpenChange={setIsAttachMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-48 bg-white border border-gray-200 rounded-lg shadow-lg" 
              style={{ 
                position: 'absolute',
                left: '8px',
                bottom: '100%',
                marginBottom: '4px'
              }}
            >
              <DropdownMenuItem className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer">
                <FileText className="mr-3 h-4 w-4" />
                Add photos & files
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer">
                <Globe className="mr-3 h-4 w-4" />
                Link
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer">
                <Link className="mr-3 h-4 w-4" />
                Select campaign
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Let's chat..."
            className="flex-1 px-3 py-2 border-0 focus:outline-none focus:ring-0 text-sm"
          />

          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleMicClick}>
            <Mic className="h-4 w-4" />
          </Button>
          <Button 
            className="h-8 w-8 bg-purple-600 hover:bg-purple-700 text-white p-0"
            onClick={handleSendMessage}
          >
            <img 
              src={sendButton} 
              alt="Send" 
              className="w-full h-full object-contain"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel; 