"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager() {
        this.productList = [];
    }
    Manager.prototype.addProduct = function (product) {
        this.productList.push(product);
    };
    Manager.prototype.showProductList = function () {
        console.log("----------Danh s\u00E1ch s\u1EA3n ph\u1EA9m--------------");
        for (var i = 0; i < this.productList.length; i++) {
            console.table(" S\u1ED1 th\u1EE9 t\u1EF1 : ".concat(i + 1, "\n                          T\u00EAn s\u1EA3n ph\u1EA9m: ").concat(this.productList[i].getProductName(), "\n                          Lo\u1EA1i s\u1EA3n ph\u1EA9m: ").concat(this.productList[i].getProductSector()));
        }
    };
    Manager.prototype.findProductName = function (name) {
        for (var i = 0; i < this.productList.length; i++) {
            var seachName = this.productList[i].getProductName();
            if (name === seachName) {
                return i;
            }
        }
        return -1;
    };
    Manager.prototype.showFindName = function (name) {
        var index = this.findProductName(name);
        if (index != -1) {
            console.table("T\u00ECm th\u1EA5y s\u1EA3n ph\u1EA9m : ".concat(name));
        }
    };
    Manager.prototype.deleteProduct = function (name) {
        var index = this.findProductName(name);
        if (index != -1) {
            this.productList.splice(index, 1);
            this.showProductList();
        }
        else {
            console.log("không tìm thấy sản phẩm");
        }
    };
    Manager.prototype.editProduct = function (name, sector, price, quality, describe) {
        var index = this.findProductName(name);
        if (index != -1) {
            this.productList[index].setProductSector(sector);
            this.productList[index].setProductPrice(price);
            this.productList[index].setProductQuality(quality);
            this.productList[index].setDescribe(describe);
        }
        this.showProductList();
    };
    return Manager;
}());
exports.Manager = Manager;
