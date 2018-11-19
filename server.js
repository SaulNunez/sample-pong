const gameport = process.env.PORT || 4004;
const io = require('socket.io');
const express = require('express');
const UUID = require('node-uuid');
const verbose = true;
const app = express.createServer();