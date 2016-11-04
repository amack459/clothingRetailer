# Shop Til You Drop




This is a mock clothing retailer site built with Angular and Bootstrap. I used Bower to install Angular and Bootstrap. So, if there's a problem getting everything connected (after you right click on the index.html to open in brower): 
    1. Go to the terminal 
    2.bower init 
    3.bower install angular 
    4. bower install bootstrap.
    5. Up to you but I delete the JQuery directory that comes with Bootstrap since it can interfere with the JQuery Lite used in Angular.


The JS directory consists of a controller and service. The cart is a service so that if it was added to a bigger build, would be accessible throughout the website/app. Items added to the cart are stored in localStorage so that the items remain if the page is refreshed. You're able to view the changes made to the cart in the top righthand corner. Unfortunately, I broke the functionality for changing quantity, and loss the working code. Time didn't allow for it to be rebuilt. So, I've commented what I would have done. As a result of this hiccup, I didn't get to implement the validation for footwear using a REGEX as planned, but I've also commented that code in the mainController.js. I've only focused on responsiveness for Apple and moving from desktop to ipad, but I've included the other breakpoints I would've done had time permitted. 

Also, I would've liked to add a sort functionality to show either all Women's Wear first or vice versa as a bonus.  
