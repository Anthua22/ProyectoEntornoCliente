import { IUser } from "../interfaces/iuser";
import { Http } from "./http.class";
import { SERVER } from '../constants';
export class User implements IUser {
    name?: string;
    email: string;
    id?: number;
    password?: string;
    photo?: string;
    me?: boolean;
    lat?: number;
    lng?: number;
   
    static post(user:User){
        let peticion = Http.post(SERVER+"/products",user);
        return peticion;
    }
}

