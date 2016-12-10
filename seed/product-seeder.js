var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

mongoose.Promise = global.Promise;

var products = [
    new Product({
        imagePath: 'http://images.medicaldaily.com/sites/medicaldaily.com/files/styles/full_breakpoints_theme_medicaldaily_desktop_1x/public/2015/07/05/nature.jpg',
        title: 'Nature dgd',
        description: 'So beautiful',
        price : 10
    }),
    new Product({
        imagePath: 'http://www.skyhdwallpaper.com/wp-content/uploads/2013/09/Nature-Scenes-Wallpaper-10.jpg',
        title: 'Nature ffhdfh',
        description: 'So beautiful',
        price : 130
    }),
    new Product({
        imagePath: 'http://www.viralnovelty.net/wp-content/uploads/2014/07/121.jpg',
        title: 'Nature jkdlk',
        description: 'So beautiful',
        price : 101
    }),
    new Product({
        imagePath: 'http://weknowyourdreams.com/images/nature/nature-02.jpg',
        title: 'Naturea qwe',
        description: 'So beautiful',
        price : 10
    }),
    new Product({
        imagePath: 'https://pp.vk.me/c837328/v837328359/110cb/3oIFgRlldr4.jpg',
        title: 'Nature is beaut',
        description: 'So beautifula',
        price : 13
    })
];

var done = 0;

for(var i = 0; i < products.length;i++) {
    products[i].save(function (err,result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
