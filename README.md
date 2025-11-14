# SEO Tools Hub – Keyword & SEO Analyzer

A comprehensive full-stack web application for SEO analysis and keyword research, built with React, Vite, TailwindCSS, and Node.js.

## Features

- **Keyword Suggestion Tool**: Get Google autocomplete suggestions, search volume, difficulty scores, and related queries.
- **SEO Analyzer Tool**: Analyze websites for meta tags, headings, word count, images, links, load speed, SEO score, readability, and more.
- **Responsive UI**: Clean, modern design with TailwindCSS and ShadCN UI components.
- **Production Ready**: Built with Vite for fast builds and optimized for deployment.

## Tech Stack

### Frontend
- React + Vite
- TailwindCSS
- React Router DOM
- Axios

### Backend
- Node.js + Express
- ZenRows Universal Scraper API
- CORS + Helmet
- dotenv

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd seo-analyzer
   ```

2. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Set up environment variables:

   **Backend (.env in server/):**
   ```env
   ZENROWS_API_KEY=your_zenrows_api_key_here
   PORT=5000
   ```

   **Frontend (.env in client/):**
   ```env
   VITE_API_URL=http://localhost:5000
   ```

5. Get your ZenRows API key from [ZenRows](https://zenrows.com/).

## Running the Application

1. Start the backend server:
   ```bash
   cd server
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Building for Production

1. Build the frontend:
   ```bash
   cd client
   npm run build
   ```
   This will create a `dist/` folder with the production build.

2. The backend is ready for production as is.

## Deployment

### Frontend (Vercel)
1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Deploy!

### Backend (Render/Railway)
1. Push your code to GitHub.
2. Connect your repository to Render or Railway.
3. Set the build command to `npm install` and the start command to `npm start`.
4. Add your environment variables in the dashboard.
5. Deploy!

## Project Structure

```
seo-analyzer/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── routes/             # API routes
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── README.md
└── package.json            # Root package.json (optional)
```

## API Endpoints

### Keywords
- `POST /api/keywords/suggestions` - Get keyword suggestions

### SEO Analysis
- `POST /api/seo/analyze` - Analyze a website's SEO

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License.
