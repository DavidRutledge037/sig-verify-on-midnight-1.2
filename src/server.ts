import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3001;

let server: any = null;

async function startServer() {
    app.use(express.static(currentDir));
    app.get('/', (_req, res) => res.sendFile(join(currentDir, 'index.html')));

    server = app.listen(PORT, () => {
        console.clear();
        console.log(`\nMidnight Integration running at http://localhost:${PORT}`);
        console.log('Press Ctrl+C to stop the server\n');
    });

    // Single handler for cleanup
    const cleanup = () => {
        if (server) {
            server.close(() => process.exit(0));
        }
    };

    // Set single handler for each signal
    process.once('SIGINT', cleanup);
    process.once('SIGTERM', cleanup);
}

startServer(); 