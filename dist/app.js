"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const rxjs_1 = require("rxjs");
const msg = 'Thats  a new message from here';
const url = ["https://toggra.com", "https://google.com", "http://www.webauskunft.info/"];
let prom;
console.log(msg);
url.forEach(item => {
    prom = axios_1.default.get(item);
    (rxjs_1.from)(prom).pipe((rxjs_1.map)(f => f.data)).subscribe(f => console.log(f));
});
