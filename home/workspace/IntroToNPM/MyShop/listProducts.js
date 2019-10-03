let products = require('faker'); 

function fakeProducts () {
    for(var i = 0; i < 10; i++){
        //console.log (products.fake("{{commerce.productName}} " + "- " + "${{commerce.price}}"));
        console.log(products.commerce.productName() + " - $" + products.commerce.price());
    }
};

fakeProducts();