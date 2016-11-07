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
          return cart.splice(index, 1)[0];
        }
      },
      itemCount: function() {
        return cart.length;
      }, 
      stock: function(item) {
       console.log(cart.map(function(Obj,index){
          return Obj.quantity;
       }));
      },
      clear: function() {
        $window.localStorage.clear();
        cart = [];
      },
      total: function() {
        return cart.reduce(function (sum, cartItem) {
          return cartItem.price + sum;
        }, 0)
      }
    }
  }


