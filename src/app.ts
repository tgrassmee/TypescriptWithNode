import axios from "axios";

const msg:string='Thats  a new message from here';
const url="https://toggra.com"
console.log(msg)

axios.get(url)
.then(response=>console.log(response))
.catch(error=>console.error(error));