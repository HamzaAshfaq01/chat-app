import { io } from 'socket.io-client';

const socket = io('https://chat-app-production-8ade.up.railway.app');

export default socket;
