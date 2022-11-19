 import { Currency } from "src/currency/currency.enum";
export class User {
    id: number;
    name: string;
    currency: Currency
    constructor(id, name, currency: Currency = Currency.UAH){
        this.id = id;
        this.name = name;
        this.currency = currency;
    }

}