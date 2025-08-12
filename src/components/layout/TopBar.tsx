import React, { useState } from 'react';
import { Button } from '../ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';
import { 
  FileText, 
  Layers, 
  Edit3, 
  ChevronUp, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Undo2, 
  Redo2,
  ArrowLeft,
  Settings
} from 'lucide-react';

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  const [selectedDevice, setSelectedDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedVariant, setSelectedVariant] = useState('Variant 3');

  const variants = ['Variant 1', 'Variant 2', 'Variant 3'];

  const devices = [
    { id: 'desktop', icon: Monitor, label: 'Desktop' },
    { id: 'tablet', icon: Tablet, label: 'Tablet' },
    { id: 'mobile', icon: Smartphone, label: 'Mobile' }
  ] as const;

  const handleFileClick = () => {
    console.log('File button clicked');
  };

  const handleLayersClick = () => {
    console.log('Layers button clicked');
  };

  const handleEditClick = () => {
    console.log('Edit button clicked');
  };

  const handleUndoClick = () => {
    console.log('Undo clicked');
  };

  const handleRedoClick = () => {
    console.log('Redo clicked');
  };

  const handleDiscardClick = () => {
    console.log('Discard clicked');
  };

  const handleSaveClick = () => {
    console.log('Save clicked');
  };

  return (
    <div className="bg-gray-100 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 px-3 text-sm justify-between min-w-[200px]">
              cognism.page/get-started
              <ChevronUp className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuItem>
              <ArrowLeft className="mr-2 h-4 w-4" />
              ← Back to Dynamic Pages
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              ⚙️ Page Settings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleFileClick}>
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleLayersClick}>
            <Layers className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleEditClick}>
            <Edit3 className="h-4 w-4" />
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 px-3 text-sm">
              {selectedVariant}
              <ChevronUp className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {variants.map((variant) => (
              <DropdownMenuItem 
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={selectedVariant === variant ? 'bg-gray-100' : ''}
              >
                {variant}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center space-x-1 bg-white rounded-lg p-1">
        {devices.map((device) => {
          const Icon = device.icon;
          const isSelected = selectedDevice === device.id;
          
          return (
            <Button
              key={device.id}
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-md ${
                isSelected 
                  ? 'bg-gray-200 text-gray-900 border border-gray-300' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setSelectedDevice(device.id)}
              title={device.label}
            >
              <Icon className="h-4 w-4" />
            </Button>
          );
        })}
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleUndoClick}>
          <Undo2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleRedoClick}>
          <Redo2 className="h-4 w-4" />
        </Button>
        <Button variant="secondary" className="h-8 px-4" onClick={handleDiscardClick}>
          Discard
        </Button>
        <Button className="h-8 px-4" onClick={handleSaveClick}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default TopBar; 