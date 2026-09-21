import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import tipData from '../data/tips.js'

// Convert the current module URL to a file path
const __filename = fileURLToPath(import.meta.url)

// Get the directory name of the current module
const __dirname = path.dirname(__filename)

// Create a new router instance
const router = express.Router()

// Define a route to get all tips
router.get('/', (req, res) => {
    res.status(200).json(tipData)
})

// Define a route to get a specific tip by its ID
router.get('/:tipId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/tip.html'))
})

export default router
