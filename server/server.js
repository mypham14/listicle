import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import tipsRouter from './routes/tips.js'

// Convert the current module URL to a file path
const __filename = fileURLToPath(import.meta.url)

// Get the directory name of the current module
const __dirname = path.dirname(__filename)

// Initialize the Express application
const app = express()

// Serve static files (index.html, tip.html, 404.html, style.css, scripts/, logo.png) from 'public' at the site root
app.use(express.static(path.join(__dirname, 'public')))

// Add the tips endpoint to the app
app.use('/tips', tipsRouter)

// Catch-all: any route that doesn't match a static file or the tips endpoint gets a real 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
})

// Start the server and listen on port 3001
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
