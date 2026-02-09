const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { marked } = require('marked');

const app = express();
const PORT = 3000;
const POSTS_DIR = path.join(__dirname, 'posts');

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Helper function to get all posts
async function getAllPosts() {
  try {
    const files = await fs.readdir(POSTS_DIR);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    const posts = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = path.join(POSTS_DIR, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const stats = await fs.stat(filePath);
        
        // Extract title from first line if it starts with #
        const lines = content.split('\n');
        const title = lines[0].startsWith('#') 
          ? lines[0].replace(/^#+\s*/, '').trim()
          : file.replace('.md', '');
        
        return {
          filename: file,
          title,
          date: stats.mtime,
          preview: content.substring(0, 150) + '...'
        };
      })
    );
    
    // Sort by date (newest first)
    return posts.sort((a, b) => b.date - a.date);
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

// Routes
// Home page - list all posts
app.get('/', async (req, res) => {
  const posts = await getAllPosts();
  res.render('index', { posts });
});

// View a single post
app.get('/post/:filename', async (req, res) => {
  try {
    const filePath = path.join(POSTS_DIR, req.params.filename);
    const content = await fs.readFile(filePath, 'utf-8');
    const html = marked(content);
    
    // Extract title
    const lines = content.split('\n');
    const title = lines[0].startsWith('#') 
      ? lines[0].replace(/^#+\s*/, '').trim()
      : req.params.filename.replace('.md', '');
    
    res.render('post', { title, content: html, filename: req.params.filename });
  } catch (error) {
    res.status(404).send('Post not found');
  }
});

// Show new post form
app.get('/new', (req, res) => {
  res.render('new');
});

// Create a new post
app.post('/new', async (req, res) => {
  try {
    const { title, content } = req.body;
    
    if (!title || !content) {
      return res.status(400).send('Title and content are required');
    }
    
    // Create filename from title
    const filename = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') + '.md';
    
    const filePath = path.join(POSTS_DIR, filename);
    
    // Create markdown content with title as heading
    const markdownContent = `# ${title}\n\n${content}`;
    
    await fs.writeFile(filePath, markdownContent, 'utf-8');
    res.redirect('/');
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send('Error creating post');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Blog app running at http://localhost:${PORT}`);
});
