// socket.js
import { io } from "socket.io-client";

const socket = io("http://your-server-url"); // 백엔드 주소

export default socket;
