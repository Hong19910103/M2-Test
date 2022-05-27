import {Product} from "./Product";
import {Manager} from "./Manager";

let product = new Product(1, "iphoneX", "Điện thoại",
    "500$", 14, "122334", "Điện thoại Iphone sản xuất tại Việt Nam");
let product1 = new Product(2, "samsung", "Điện thoại",
    "1500$", 4, "122334", "Điện thoại Iphone sản xuất tại Việt Nam");
let product2 = new Product(3, "vinSmart", "Điện thoại",
    "1200$", 11, "122334", "Điện thoại Iphone sản xuất tại Việt Nam");
let product3 = new Product(4, "Daikin", "Điều hòa",
    "1400$", 3, "122334", "Điện thoại Iphone sản xuất tại Việt Nam");
let product4 = new Product(5, "panasonic", "Tủ lạnh",
    "600$", 4, "122334", "Điện thoại Iphone sản xuất tại Việt Nam");

let productList = new Manager();

productList.addProduct(product);
productList.addProduct(product1);
productList.addProduct(product2);
productList.addProduct(product3);
productList.addProduct(product4);
productList.showProductList();
productList.showFindName("iphoneX");
productList.deleteProduct("Daikin");
productList.editProduct("iphoneX","điện thoại chính hãng","700$",6,"còn hàng");
