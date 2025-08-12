import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';
import { Layers, ChevronUp, Monitor, Tablet, Smartphone, Undo2, Redo2, PenTool, PanelLeftClose } from 'lucide-react';

interface PreviewPaneProps {
  onToggleChat: () => void;
}

const PreviewPane: React.FC<PreviewPaneProps> = ({ onToggleChat }) => {
  const [selectedVariant, setSelectedVariant] = useState(() => {
    const saved = localStorage.getItem('selectedVariant');
    return saved || 'Variant 3';
  });
  
  const [selectedDevice, setSelectedDevice] = useState(() => {
    const saved = localStorage.getItem('selectedDevice');
    return saved || 'desktop';
  });

  useEffect(() => {
    localStorage.setItem('selectedVariant', selectedVariant);
  }, [selectedVariant]);

  useEffect(() => {
    localStorage.setItem('selectedDevice', selectedDevice);
  }, [selectedDevice]);

  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
  };

  const handleVariantSelect = (variant: string) => {
    setSelectedVariant(variant);
  };

  const handleDeviceSelect = (device: string) => {
    setSelectedDevice(device);
  };

  return (
    <div className="w-[978px] h-[900px] relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-20 h-12 flex items-center rounded-tr-[20px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onToggleChat}>
              <PanelLeftClose className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Layers className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <PenTool className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 px-3 text-sm">
                  {selectedVariant}
                  <ChevronUp className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleVariantSelect('Variant 1')}>
                  Variant 1
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleVariantSelect('Variant 2')}>
                  Variant 2
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleVariantSelect('Variant 3')}>
                  Variant 3
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center space-x-1 bg-white rounded-lg p-1 border border-gray-200">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-8 w-8 rounded-md ${selectedDevice === 'desktop' ? 'bg-gray-200 text-gray-900 border border-gray-300' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => handleDeviceSelect('desktop')}
              >
                <Monitor className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-8 w-8 rounded-md ${selectedDevice === 'tablet' ? 'bg-gray-200 text-gray-900 border border-gray-300' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => handleDeviceSelect('tablet')}
              >
                <Tablet className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-8 w-8 rounded-md ${selectedDevice === 'mobile' ? 'bg-gray-200 text-gray-900 border border-gray-300' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => handleDeviceSelect('mobile')}
              >
                <Smartphone className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Undo2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Redo2 className="h-4 w-4" />
            </Button>
            <Button variant="secondary" className="h-8 px-4">
              Discard
            </Button>
            <Button className="h-8 px-4">
              Save
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-2 right-2 h-full">
        <div className="absolute top-0 left-0 right-0 h-5 bg-white rounded-t-[20px] z-10"></div>
        
        <div className="absolute top-0 left-0 right-0 h-full rounded-t-[20px] overflow-hidden">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'url(/background.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      </div>
      
      <div className="absolute top-20 right-8 flex space-x-3 z-10">
        <Button 
          variant="outline" 
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 px-4 py-2 rounded-md text-sm font-medium"
          onClick={handleLogin}
        >
          Log in
        </Button>
        <Button 
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium"
          onClick={handleSignUp}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default PreviewPane; 