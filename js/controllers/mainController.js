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

    discount = 0;
    this.itemCount = cart.itemCount();
    this.cartTotal = cart.total();

    this.addToCart = function(item){
      cart.add(item);
      this.itemCount = cart.itemCount(); 
      this.cartTotal = cart.total();
      this.quantity  = cart.stock() - 1;
      //decrease stock if it has more than 0
      // if(this.quantity > 0){
      //   this.quantity = cart.stock() - 1; 
      // }else{
      //   alert("This item is sold out.");
      // }
     
    }

    this.removeFromCart = function(item){  
      cart.delete(item); 
      this.cartTotal = cart.total() ;
      if(this.itemCount > 0){
        this.itemCount --;
      }
      //if the stock is less than seed quantity, increase by 1
    }

    this.discount5 = function(cartTotal){
     if(this.cartTotal > 5 && discount === 0){
       discount ++; 
       this.cartTotal = this.cartTotal - 5;  
     } else if(this.cartTotal < 5 && discount === 0){
      alert("You must have an item in your cart.");
    } else {
      alert("Sorry, vouchers can only be used once.");
    }
  }  

  this.discount10 = function(cartTotal){
    if(this.cartTotal > 50 && discount === 0){
      discount ++; 
      this.cartTotal = this.cartTotal - 10;  
    } else if(this.cartTotal <= 50 && discount === 0){
     alert("Your total must be over £50.");
   } else {
     alert("Sorry, vouchers can only be used once.");
   }
 }

 function validate(item) {
  //regex to validate if there is footwear present
  //function would be called on click instead of the discount15
  var code = /footwear/gi;

  for(var i = 0; i<cart.length; i++){
    var category = cart[i].category;
    category.test(code);
    if(category.test(code) === true){
      this.discount15();
    }else{
      alert("You must have at least 1 footwear item.")
    }
  }  
}

  this.discount15 = function(cartTotal){

    if(this.cartTotal > 75 && discount === 0){
      discount ++; 
      this.cartTotal = this.cartTotal - 15;  
    } else if(this.cartTotal <= 75 && discount === 0){
      alert("Your total must be over £75.");
    } else {
      alert("Sorry, vouchers can only be used once.");
    }
  }

  this.checkOut = function(){
    if(this.cartTotal > 0){
      alert("Thank you for shopping with us!");
      cart.clear();
      this.itemCount = 0;
      this.cartTotal = 0;
      discount  = 0

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