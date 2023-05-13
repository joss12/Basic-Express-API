const { Router } = require('express')

const router = Router();



router.get('/', (req, res) => {
  res.render('index', {
    layout: false,
    pageTitle: 'Home',
    mainHeading: 'Message',
  });
});

let users = [
    {
        id: '1',
        name: 'Shaun',
        age: 100,
        hairColor: 'Brown'
    },
    {
        id: '2',
        name: 'Eddy',
        age: 30,
        hairColor: 'Black'
    },
    {
        id: '3',
        name: 'Joss',
        age: 32,
        hairColor: 'White'
    }
]



router.get('/users/:userId', (req, res) =>{
    const {userId} = req.params;
    const user = users.find(user=>user.id === userId);

    res.render('user-profile', {
        layout:false,
        user,
    });
});

let products = [
    {
        name: 'Shoes',
        price: 50,

    },
    {
        name: 'Socks',
        price: 10,

    },
    {
        name: 'Shirt',
        price: 20,

    },
    {
        name: 'Pants',
        price: 30,

    }
]

router.get('/products', (req, res)=>{
    const {name, price} = req.query;

    let responseProducts = products;

    if(name){
        responseProducts = responseProducts.filter(p => p.name.includes(name))
    }

    if(price){
        responseProducts = responseProducts.filter(p => p.price < Number(price))
    }

    res.render('products',{
        layout: false,
        productNames: responseProducts.map(p => p.name).join(','),
    });

});


router.get('/users', (req, res)=>{
    res.render('user-list', {
       layout: false,
       users,
    }); 
})


module.exports = router
