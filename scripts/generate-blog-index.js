
const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/assets/blog');
const indexFile = path.join(blogDir, 'index.json');

// Ensure directory exists
if (!fs.existsSync(blogDir)) {
  console.log('Blog directory not found, creating...');
  fs.mkdirSync(blogDir, { recursive: true });
}

const posts = [];

fs.readdirSync(blogDir).forEach(file => {
  if (path.extname(file) === '.md') {
    const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    
    // Simple frontmatter parsing (comments style)
    // <!--
    // title: Title
    // date: YYYY-MM-DD
    // tags: #tag1 #tag2
    // -->
    const frontmatterMatch = content.match(/<!--([\s\S]*?)-->/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const metadata = {};
      
      frontmatter.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
          const key = line.slice(0, colonIndex).trim().toLowerCase();
          const value = line.slice(colonIndex + 1).trim();
          metadata[key] = value;
        }
      });

      if (metadata.title) {
        posts.push({
          file: file,
          title: metadata.title,
          date: metadata.date || 'Unknown',
          tags: metadata.tags ? metadata.tags.split(' ') : [],
          preview: content.replace(/<!--[\s\S]*?-->/, '').slice(0, 150).trim() + '...'
        });
      }
    }
  }
});

// Sort by date descending
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(indexFile, JSON.stringify(posts, null, 2));
console.log(`Generated blog index with ${posts.length} posts.`);
