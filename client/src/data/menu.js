export const categories = ['All', 'Burgers', 'Pizzas', 'Fried Chicken', 'Sides', 'Drinks'];
export const menuItems = [
 {id:1,name:'NZZ Double Smash',category:'Burgers',price:59000,description:'Two smashed beef patties, cheddar, pickles and NZZ sauce.',image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900',badge:'BESTSELLER',popular:true},
 {id:2,name:'Firebird Chicken',category:'Burgers',price:49000,description:'Crispy chicken, slaw, hot honey and creamy ranch.',image:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=900',badge:'SPICY',spicy:true},
 {id:3,name:'Triple Trouble',category:'Burgers',price:69000,description:'Three juicy patties, smoky cheese and caramelized onion.',image:'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=900'},
 {id:4,name:'Pepperoni Riot',category:'Pizzas',price:79000,description:'Stone-baked crust, mozzarella and pepperoni.',image:'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=900',badge:'POPULAR',popular:true},
 {id:5,name:'BBQ Chicken Pizza',category:'Pizzas',price:85000,description:'Grilled chicken, smoky BBQ, red onion and mozzarella.',image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900'},
 {id:6,name:'Crispy Wings',category:'Fried Chicken',price:45000,description:'Golden wings tossed in your choice of signature sauce.',image:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900',badge:'SPICY',spicy:true},
 {id:7,name:'Crunch Chicken Box',category:'Fried Chicken',price:65000,description:'Crispy chicken pieces, fries and a cool dip.',image:'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=900'},
 {id:8,name:'Loaded Fire Fries',category:'Sides',price:29000,description:'Crispy fries, cheese sauce, jalapeños and herbs.',image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900'},
 {id:9,name:'Mozzarella Sticks',category:'Sides',price:32000,description:'Stretchy mozzarella in a crunchy golden coating.',image:'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=900'},
 {id:10,name:'Orange Blast',category:'Drinks',price:16000,description:'Bright, refreshing citrus soda.',image:'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900'},
 {id:11,name:'Classic Milkshake',category:'Drinks',price:25000,description:'Thick vanilla milkshake with a creamy finish.',image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900'}
];
export const formatPrice = value => new Intl.NumberFormat('uz-UZ').format(value) + " so'm";
