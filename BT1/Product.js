"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(ProductID, ProductName, ProductSector, ProductPrice, ProductQuality, ProductCreatedDate, Describe) {
        this._ProductID = ProductID;
        this._ProductName = ProductName;
        this._ProductSector = ProductSector;
        this._ProductPrice = ProductPrice;
        this._ProductQuality = ProductQuality;
        this._ProductCreatedDate = ProductCreatedDate;
        this._Describe = Describe;
    }
    Product.prototype.getProductID = function () {
        return this._ProductID;
    };
    Product.prototype.setProductID = function (id) {
        this._ProductID = id;
    };
    Product.prototype.getProductName = function () {
        return this._ProductName;
    };
    Product.prototype.setProductName = function (name) {
        this._ProductName = name;
    };
    Product.prototype.getProductSector = function () {
        return this._ProductSector;
    };
    Product.prototype.setProductSector = function (sector) {
        this._ProductSector = sector;
    };
    Product.prototype.getProductPrice = function () {
        return this._ProductPrice;
    };
    Product.prototype.setProductPrice = function (price) {
        this._ProductPrice = price;
    };
    Product.prototype.getProductQuality = function () {
        return this._ProductQuality;
    };
    Product.prototype.setProductQuality = function (quality) {
        this._ProductQuality = quality;
    };
    Product.prototype.getProductCreatedDate = function () {
        return this._ProductCreatedDate;
    };
    Product.prototype.setProductCreatedDate = function (date) {
        this._ProductCreatedDate = date;
    };
    Product.prototype.getDescribe = function () {
        return this._Describe;
    };
    Product.prototype.setDescribe = function (describe) {
        this._Describe = describe;
    };
    return Product;
}());
exports.Product = Product;
