import { Component } from '@angular/core';
import { Products } from './productInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShoppingWebpage';
  public cartItemCount:number=0;
  public categories:string[]=[];
  public products:Products[]=[];
  public cartItems:Products[]=[];
  public isCartItemVisible:boolean=false;
  public total:number=110;
  public subtotal:number=0
  public loadCategories():void{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>{
              data.unshift('all')
              this.categories=data
            })
  }

  public loadProducts(url:string):void{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      this.products = data;
    })
  }

  public getCartItemsCount():void{
    this.cartItemCount = this.cartItems.length;
  }

  ngOnInit(){
    this.loadCategories();
    this.loadProducts('https://fakestoreapi.com/products')
  }
  public CategoryChanged(categoryName:string){
    if (categoryName == 'all') {
      this.loadProducts('https://fakestoreapi.com/products')
    }else{
      this.loadProducts(`https://fakestoreapi.com/products/category/${categoryName}`)
    }
  }
  public ToggleCart(){
    this.isCartItemVisible = (this.isCartItemVisible == false)?true:false
  }
  public removeItem(index:number){
    const {price}=this.cartItems[index]
    this.subtotal+=price
    this.total+=this.subtotal
    //remove 1 item from specified index
    this.cartItems.splice(index,1)
    this.getCartItemsCount();
    

  }
  public AddToCart(productObj:Products){

    this.subtotal+=productObj.price
    this.total+=this.subtotal

    this.cartItems.push(productObj)
    this.getCartItemsCount();

  }

}
