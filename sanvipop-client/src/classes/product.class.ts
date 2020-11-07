import { IProduct } from "../interfaces/iproduct";

export class Product implements IProduct {
    id?: number;
    title: string;
    description: string;
    price: number;
    mainPhoto: string;
    owner?: import("../interfaces/iuser").IUser;
    numVisits?: number;
    category: number | import("../interfaces/icategory").ICategory;
    mine?: boolean;
    photos?: import("../interfaces/iphoto").IPhoto;
    datePublished?: string;
    distance?: number;
   
}
