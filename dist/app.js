"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const msg = 'Thats  a new message from here';
const url = "https://toggra.com";
console.log(msg);
axios_1.default.get(url)
    .then(response => console.log(response))
    .catch(error => console.error(error));
