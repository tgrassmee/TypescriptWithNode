import axios, {AxiosResponse} from "axios";
import {from, map} from "rxjs";

const msg:string='Thats a new message from here';
const url:string[]=["https://toggra.com","https://google.com","http://www.webauskunft.info/"]

let prom:Promise<AxiosResponse>;
console.log(msg)

url.forEach(item=>{

prom=axios.get(item);
from(prom).pipe(map(f=>f.data)).subscribe(f=>console.log(f));

})





