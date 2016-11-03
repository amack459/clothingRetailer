angular
  .module('clothingRetailer')
  .controller('MainController', MainController);

  MainController.$inject = ['cart'];

  function MainController(cart){
    this.items = [{
      name: "Almond Toe Court Shoe",
      color: "Patent Black",
      category: "Women's Footwear",
      price: 99.00, 
      image: "css/photos/blackShoe.jpeg",
      quantity: 5
    },{
      name: "Suede Shoes",
      color: "Blue",
      category: "Women's Footwear",
      price: 42.00,
      image: "css/photos/blueSuedeShoe.jpg", 
      quantity: 4  
    },{
      name: "Leather Driver Saddle Loafers",
      color: "Tan",
      category: "Men's Footwear",
      price: 34.00, 
      image: "css/photos/tanShoe.jpeg",
      quantity: 12
    },{
      name: "Flip Flops",
      color: "Red",
      category: "Men's Footwear",
      price: 19.00, 
      image: "css/photos/flipFlopRed.jpg",
      quantity: 6
    },{
      name: "Flip Flops",
      color: "Blue",
      category: "Men's Footwear",
      price: 19.00,
      image: "css/photos/flipFlopBlue.jpg", 
      quantity: 0
    },{
      name: "Gold Button Cardigan",
      color: "Black",
      category: "Women's Casualwear",
      price: 167.00, 
      image: "css/photos/goldButton.jpeg",
      quantity: 6
    },{
      name: "Cotton Shorts",
      color: "Medium Red",
      category: "Women's Casualwear",
      price: 30.00,
      image: "css/photos/cottonShorts.jpg", 
      quantity: 5
    },{
      name: "Fine Stripe Short Sleeve Shirt",
      color: "Grey",
      category: "Men's Casualwear",
      price: 49.99,
      image: "css/photos/stripeShirtGrey.jpg",
      quantity: 9
    },{
      name: "Fine Stripe Short Sleeve Shirt",
      color: "Green",
      category: "Men's Casualwear",
      price: 49.99,
      image: "css/photos/stripeShirtGreen.jpg", 
      quantity: 3
    },{
      name: "Sharkskin Waistcoat",
      color: "Charcoal",
      category: "Men's Formalwear",
      price: 75.00,
      image: "css/photos/sharkskin.jpg", 
      quantity: 2
    },{
      name: "Lightweight Patch Pocket Blazer",
      color: "Deer",
      category: "Men's Formalwear",
      price: 175.50,
      image: "css/photos/patchPocket.jpeg", 
      quantity: 1
    },{
      name: "Bird Print Dress",
      color: "Black",
      category: "Women's Formalwear",
      price: 270.00,
      image: "css/photos/birds.jpeg",
      quantity: 10
    },{
      name: "Mid Twist Cut-Out Dress",
      color: "Pink",
      category: "Women's Casualwear",
      price: 540.00, 
      image: "css/photos/cutOut.jpg",
      quantity: 5
    }];



    this.quantity;
    discount = 0;
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
      
      if(this.cartTotal >= 5 && discount === 0) {
        discount ++;  
        this.cartTotal = this.cartTotal - 5;
      } 

      if(this.cartTotal < 5) {
        alert("You must have an item in your cart.")
      }

      if(discount !== 0){
        alert("Sorry, only one voucher per order.")
      }
       console.log(discount)
    }  

    this.discount10 = function(cartTotal){
      console.log(discount)
        if(this.cartTotal > 50 && discount === 0) {
            this.cartTotal = this.cartTotal - 10;
            discount ++;
          }
        if(this.cartTotal <= 50 && discount === 0) {
          alert("Your total must be over £50.")
        }
    }

    this.discount15 = function(cartTotal,cartItems){
      console.log(discount)
     if(this.cartTotal > 75 && discount === 0) {
       this.cartTotal = this.cartTotal - 15;
       discount ++;
     } 

     if (this.cartTotal <= 75 && discount === 0){
      alert("Your total must be over £75.")
    }
    }

    this.clearCart = function(){
      cart.clear();
      this.itemCount = 0;
      this.cartTotal = 0;
      discount  = 0
      // this.quantity = cart.stock();
    }
  }