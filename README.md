# React SPA - Pixel Perfect Design Implementation

A single-page application built with React 19, TypeScript, Vite, and Tailwind CSS v4, implementing a pixel-perfect design from Figma.

## Features

- **Top Bar**: Interactive device selector with visual state retention, variant dropdown, undo/redo, Discard/Save buttons
- **Preview Pane**: Website preview area with background image and header controls
- **Chat Panel**: Functional chat interface with auto-reply functionality and attach menu
- **Responsive Layout**: Dynamic width adjustment based on chat panel visibility

## Tech Stack

- React 19 (Vite)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Lucide React icons

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── AppLayout.tsx
│   │   ├── ChatPanel.tsx
│   │   └── PreviewPane.tsx
│   └── ui/
│       ├── button.tsx
│       └── dropdown-menu.tsx
├── assets/
│   └── icons/
└── lib/
    └── utils.ts
```

## Implementation Notes

- Pixel-perfect design implementation according to Figma specifications
- State persistence using localStorage for chat messages and dropdown selections
- Custom dropdown components for precise positioning control
- Background image integration with proper border radius and padding
- Interactive chat functionality with 2-second auto-reply
- Device selector with visual state retention
- Chat panel toggle functionality


