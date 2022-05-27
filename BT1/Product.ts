export class Product {
    private _ProductID:number;
    private _ProductName:string;
    private _ProductSector:string;
    private _ProductPrice:string;
    private _ProductQuality:number;
    private _ProductCreatedDate:string;
    private _Describe:string;

    constructor(ProductID: number,
                ProductName: string,
                ProductSector: string,
                ProductPrice: string,
                ProductQuality: number,
                ProductCreatedDate: string,
                Describe: string) {
        this._ProductID = ProductID;
        this._ProductName = ProductName;
        this._ProductSector = ProductSector;
        this._ProductPrice = ProductPrice;
        this._ProductQuality = ProductQuality;
        this._ProductCreatedDate = ProductCreatedDate;
        this._Describe = Describe;
    }

    getProductID(): number {
        return this._ProductID;
    }

    setProductID(id: number) {
        this._ProductID = id;
    }

    getProductName(): string {
        return this._ProductName;
    }

    setProductName(name: string) {
        this._ProductName = name;
    }

    getProductSector(): string {
        return this._ProductSector;
    }

    setProductSector(sector: string) {
        this._ProductSector = sector;
    }

    getProductPrice(): string {
        return this._ProductPrice;
    }

    setProductPrice(price: string) {
        this._ProductPrice = price;
    }

    getProductQuality(): number {
        return this._ProductQuality;
    }

    setProductQuality(quality: number) {
        this._ProductQuality = quality;
    }

    getProductCreatedDate(): string {
        return this._ProductCreatedDate;
    }

    setProductCreatedDate(date: string) {
        this._ProductCreatedDate = date;
    }

    getDescribe(): string {
        return this._Describe;
    }

    setDescribe(describe: string) {
        this._Describe = describe;
    }
}