// Optimize behavior of Vite for production builds and development server
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        // Specify the output directory for the build files when running npm run build
        emptyOutDir: true,
        outDir: '../server/public', 
    },
    server: {
        proxy: {
            '/tips': { // Proxy requests to the /tips endpoint to the backend server running on port 3001
                target: 'http://localhost:3001'
            }
        }
    }
})