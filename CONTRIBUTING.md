# Contributing to Posty

Thank you for your interest in contributing to Posty! This document provides guidelines for contributing to the project.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git

### Setting Up the Development Environment

1. Fork and clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/posty-app.git
cd posty-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser to `http://localhost:3000`

## Writing Blog Posts

### Creating a New Post

There are two ways to create a new blog post:

#### Method 1: Using the Web Interface (Recommended for Authors)

1. Start the server with `npm start`
2. Navigate to `http://localhost:3000`
3. Click the "Create New Post" button
4. Fill in the title and content
5. Click "Publish Post"

#### Method 2: Creating Files Manually (For Developers)

1. Create a new `.md` file in the `posts/` directory
2. Name your file using lowercase letters, numbers, and hyphens (e.g., `my-awesome-post.md`)
3. Start your post with a heading using `#`

Example post structure:
```markdown
# Your Post Title

Your introduction paragraph goes here.

## Section Heading

More content with **bold** and *italic* text.

- Bullet points
- More points

[Links work too](https://example.com)
```

### Markdown Guidelines

Posty supports standard Markdown formatting:

- **Headings**: Use `#` for H1, `##` for H2, etc.
- **Bold**: Wrap text in `**double asterisks**`
- **Italic**: Wrap text in `*single asterisks*`
- **Links**: `[link text](url)`
- **Lists**: Use `-` for unordered lists, numbers for ordered lists
- **Code**: Use backticks for `inline code` or triple backticks for code blocks

### Post Title Best Practices

- Use the first H1 heading (`#`) as your post title
- Make titles clear, descriptive, and concise
- Avoid special characters in filenames (they'll be converted to hyphens)

## Contributing Code

### Code Style

- Use 2 spaces for indentation
- Use semicolons in JavaScript
- Use meaningful variable names
- Add comments for complex logic

### Making Changes

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and test them thoroughly

3. Commit your changes:
```bash
git add .
git commit -m "Description of your changes"
```

4. Push your branch:
```bash
git push origin feature/your-feature-name
```

5. Open a Pull Request on GitHub

### Pull Request Guidelines

- Provide a clear description of the changes
- Reference any related issues
- Ensure the app runs without errors
- Test your changes locally before submitting

## Project Structure

```
posty-app/
├── server.js          # Main Express server
├── package.json       # Dependencies and scripts
├── posts/             # Markdown blog posts
├── views/             # EJS templates
│   ├── index.ejs      # Homepage (post list)
│   ├── post.ejs       # Single post view
│   └── new.ejs        # New post form
└── public/            # Static assets
    └── style.css      # Styles
```

## Reporting Issues

If you find a bug or have a suggestion:

1. Check if an issue already exists
2. If not, create a new issue with:
   - A clear title
   - Detailed description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior

## Questions?

Feel free to open an issue for any questions about contributing!

Thank you for contributing to Posty! 🎉
