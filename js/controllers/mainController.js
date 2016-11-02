angular
  .module('clothingRetailer')
  .controller('MainController', MainController);

  MainController.$inject = ['cart'];

  function MainController(cart){
    this.items = [{

      name: "Almond Toe Court Shoe, Patent Black",
      category: "Women's Footwear",
      price: 99.00, 
      quantity: 5
    },{
      name: "Suede Shoes, Blue",
      category: "Women's Footwear",
      price: 42.00, 
      quantity: 4  
    },{
      name: "Leather Driver Saddle Loafers, Tan",
      category: "Men's Footwear",
      price: 34.00, 
      quantity: 12
    },{
      name: "Flip Flops, Red",
      category: "Men's Footwear",
      price: 19.00, 
      quantity: 6
    },{
      name: "Flip Flops, Red",
      category: "Men's Footwear",
      price: 19.00, 
      quantity: 0
    },{
      name: "Gold Button Cardigan, Black",
      category: "Women's Casualwear",
      price: 167.00, 
      quantity: 6
    },{
      name: "Cotton Shorts, Medium Red",
      category: "Women's Casualwear",
      price: 30.00, 
      quantity: 5
    },{
      name: "Fine Stripe Short Sleeve Shirt, Grey",
      category: "Men's Casualwear",
      price: 49.99, 
      quantity: 9
    },{
      name: "Fine Stripe Short Sleeve Shirt, Green",
      category: "Men's Casualwear",
      price: 49.99,
      sale: 39.99, 
      quantity: 3
    },{
      name: "Sharkskin Waistcoat, Charcoal",
      category: "Men's Formalwear",
      price: 75.00, 
      quantity: 2
    },{
      name: "Lightweigth Patch Pocket Blazer, Deer",
      category: "Men's Formalwear",
      price: 175.50, 
      quantity: 1
    },{
      name: "Bird Print Dress, Black",
      category: "Women's Formalwear",
      price: 270.00, 
      quantity: 10
    },{
      name: "Mid Twist Cut-Out Dress, Pink",
      category: "Women's Casualwear",
      price: 540.00, 
      quantity: 5
    }];



    this.quantity;
    this.discount = 0;
    this.itemCount = cart.itemCount();
    this.cartTotal = cart.total();

    this.addToCart = function(item){
      //cart is in our 
      cart.add(item);
      this.itemCount = cart.itemCount(); 
      this.cartTotal = cart.total();
    }

    this.removeFromCart = function(item){
    
      console.log(cart.delete(item)); 
      cart.delete(item); 
      this.cartTotal = cart.total();
      if(this.itemCount > 0){
        this.itemCount --;
      }
    }

    this.discount5 = function(cartTotal){
      this.discount ++;
      if(this.discount == 1){
        this.cartTotal = this.cartTotal - 5; 
      }else{
        alert("Sorry, vouchers can only be used once.");
      } 
    }  

    this.discount10 = function(cartTotal){
      if(this.discount == 0 && this.cartTotal > 50){
        this.discount ++;
        this.cartTotal = this.cartTotal - 10; 
      }

      if(this.discount > 0){
        alert("Sorry, vouchers can only be used once.")
      }

      if(this.discount == 0 && this.cartTotal < 51){
        alert("Your total must be over £50.");
      }
    }

    this.discount15 = function(cartTotal,cartItems){
     console.log(cart);

     if(this.discount == 0 && this.cartTotal > 75){
       this.discount ++;
       this.cartTotal = this.cartTotal - 15; 
     }

     if(this.discount > 0){
      alert("Sorry, vouchers can only be used once.")
     }

     if(this.discount == 0 && this.cartTotal < 76){
      alert("Your total must be over £75.")
     }
    }

    this.clearCart = function(){
      cart.clear();
      this.itemCount = 0;
      this.cartTotal = 0;
      this.discount  = 0
      // this.quantity = cart.stock();
    }
    console.log(this.discount);
  }