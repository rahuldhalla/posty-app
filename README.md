# Posty - Simple Markdown Blog App

A lightweight Node.js blog application that serves Markdown posts with a clean, modern interface.

## Features

- 📝 Write posts in Markdown
- 📋 List all posts with previews
- 👁️ Render Markdown posts as beautiful HTML
- ➕ Add new posts via web form
- 🎨 Clean, responsive design

## Installation

1. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
npm start
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

3. Browse existing posts or create new ones!

## Structure

```
POSTY-APP/
├── server.js          # Main application server
├── package.json       # Dependencies
├── posts/             # Markdown posts folder
│   └── welcome-to-posty.md
├── views/             # EJS templates
│   ├── index.ejs      # Posts list page
│   ├── post.ejs       # Single post view
│   └── new.ejs        # New post form
└── public/            # Static files
    └── style.css      # Styles
```

## How It Works

- Posts are stored as `.md` files in the `posts/` folder
- The app automatically reads and displays all Markdown files
- Posts are sorted by creation date (newest first)
- The title is extracted from the first heading in each post
- New posts are created via the web form and saved to the `posts/` folder

Enjoy your blogging! 🚀
