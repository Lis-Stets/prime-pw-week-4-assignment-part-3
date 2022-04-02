console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

//////Add Item function//////
function addItem( item ) {
    console.log( 'in addItem', item );
    if( typeof item === 'string' ){
    basket.push( item );
    console.log( item, 'added to basket');
    return true;
    }
    else{
        console.log( item, 'could not be added to cart.' );
        return false
    }
}//end addItem

console.log( 'Item was added to basket:', addItem( 'monitor' ) );
console.log( 'Item was added to basket:', addItem( 7 ) );
console.log( 'Item was added to basket:', addItem( 'dogTreats' ) );
console.log( 'Item was added to basket:', addItem( 'milk' ) );
console.log( 'Item was added to basket:', addItem( 'coffee' ) );
console.log( 'Item was added to basket:', addItem( 'truffles' ) );

//////List Items function//////
function listItems(){
    console.log( 'in listItems' );
    for( let i=0; i<basket.length; i++ ){
        console.log( basket[i] );
    }
    return "list of items complete";
}//end listItems

console.log( 'these items are in your basket:');
 console.log( listItems()) ;

//////Empty function//////
function empty(){
    console.log( 'in empty', basket );
    basket = [];
    console.log( 'your basket has been emptied', basket );
    return basket
}
console.log( 'basket:', basket );
console.log( 'your current basket', empty() );

