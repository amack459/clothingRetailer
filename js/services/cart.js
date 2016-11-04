angular
  .module('clothingRetailer')
  .service('cart', Cart);

  Cart.$inject = ['$window'];
  function Cart($window){

    var cart = angular.fromJson($window.localStorage.getItem('cart') || []);



    return {
      add: function(item) {
        cart.push(item);
        window.localStorage.setItem('cart', angular.toJson(cart, 'pretty'));
      }, 
      delete: function(item) { 
        var index = cart.indexOf(item);
        if(index > -1) {
          return cart.splice(index, 1);
        }
      },
      itemCount: function() {
        return cart.length;
      }, 
      stock: function(item) {
        //get index of item clicked
        //quantity of item = stock
      },
      clear: function() {
        $window.localStorage.clear();
        cart = [];
      },
      total: function() {
        return cart.reduce(function (sum, cartItem) {
          return cartItem.price + sum;
        }, 0)
      }, 
      discount5: function () {
       return cart.total -= 5;
     },
     discount10: function () {
       return cart.total -= 10;
     },
     discount15: function () {
       return cart.total -= 15;
     }
  }
}


