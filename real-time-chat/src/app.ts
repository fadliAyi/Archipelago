import express from 'express';
import WebSocket from 'ws';

const app = express();
const port = process.env.PORT || 3000;

// HTTP server for static assets and WebSocket
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message: string) => {
    // Broadcast the received message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        console.log(`Broadcasting message: ${message}`);
        client.send(message);
      }
    });
  });

  ws.send('Welcome to the chat!');
});