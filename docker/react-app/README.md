# Yes/No Dashboard

A beautiful React + TypeScript + Material-UI dashboard that fetches random yes/no answers with fun GIFs from the yesno.wtf API.

## Features

- 🎯 **Simple Dashboard**: Clean, modern interface built with Material-UI
- 🎲 **Random Answers**: Get random "yes" or "no" answers with each button click
- 🖼️ **Fun GIFs**: Each response comes with an entertaining GIF
- 📊 **Request Counter**: Track how many requests you've made
- 🎨 **Responsive Design**: Works perfectly on desktop and mobile devices
- ⚡ **Fast Loading**: Built with Vite for lightning-fast development and build times
- 🔄 **Loading States**: Smooth loading indicators while fetching data
- ❌ **Error Handling**: Graceful error handling for network issues

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library and design system
- **Emotion** - CSS-in-JS styling

## API

This dashboard uses the [yesno.wtf API](https://yesno.wtf/api) which returns responses in the following format:

```json
{
  "answer": "yes", // or "no"
  "forced": false, // whether the answer was forced
  "image": "https://yesno.wtf/assets/yes/1-photo.gif"
}
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:

   ```bash
   cd yesno-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

1. Open the application in your browser
2. Click the "Get Next Answer" button to fetch a random yes/no answer
3. Enjoy the random GIF that comes with each response!
4. The request counter shows how many times you've clicked the button

## Project Structure

```
src/
├── types.ts          # TypeScript type definitions
├── App.tsx          # Main dashboard component
├── main.tsx         # Application entry point
└── vite-env.d.ts    # Vite type declarations
```

## Features Explained

### Dashboard Layout

- Clean, centered layout with Material-UI components
- Responsive design that works on all screen sizes
- Beautiful cards and papers for content organization

### API Integration

- Fetches data from yesno.wtf API
- Handles loading states with spinning indicators
- Displays error messages if the API is unavailable
- Shows request counter for user engagement

### Visual Elements

- Dynamic icons (✓ for yes, ✗ for no)
- Color-coded chips (green for yes, red for no)
- Animated GIFs displayed in elegant cards
- Professional typography and spacing

## Contributing

Feel free to contribute to this project by:

- Reporting bugs
- Suggesting new features
- Submitting pull requests

## License

This project is open source and available under the [MIT License](LICENSE).
