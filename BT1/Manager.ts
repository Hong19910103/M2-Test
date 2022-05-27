import {Product} from "./Product";
export class Manager {
   productList: Product[]=[]
    constructor() {
    }

    addProduct(product:Product):void{
       this.productList.push(product)
    }

    showProductList():void{
        console.log(`----------Danh sách sản phẩm--------------`)
        for (let i = 0; i < this.productList.length; i++) {
            console.table(` Số thứ tự : ${i+1}
                          Tên sản phẩm: ${this.productList[i].getProductName()}
                          Loại sản phẩm: ${this.productList[i].getProductSector()}`)
        }

    }
    findProductName(name: string) {
        for (let i = 0; i < this.productList.length; i++) {
            let seachName = this.productList[i].getProductName();
            if (name === seachName) {
                return i;
            }
        }
        return -1;
    }
   showFindName(name:string){
       let index=this.findProductName(name)
       if(index!=-1){
           console.table(`Tìm thấy sản phẩm : ${name}`)
       }
   }
   deleteProduct(name:string){
       let index=this.findProductName(name);
       if(index!=-1){
           this.productList.splice(index,1);
           this.showProductList();

       }else{
           console.log("không tìm thấy sản phẩm")
       }

   }
   editProduct(name:string,sector:string,price:string,quality:number,describe:string){
        let index= this.findProductName(name);
        if(index!=-1){
            this.productList[index].setProductSector(sector);
            this.productList[index].setProductPrice(price);
            this.productList[index].setProductQuality(quality);
            this.productList[index].setDescribe(describe);
        }
        this.showProductList();
   }



}