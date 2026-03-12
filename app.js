const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Cấu hình EJS làm template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cấu hình static files (css, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route trang chủ
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page - Floral Design' });
});

// Route trang About Us
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us - Floral Design' });
});

// Route trang Bouquets
app.get('/bouquets', (req, res) => {
    res.render('bouquets', { title: 'Bouquets - Floral Design' });
});

// Route trang Specials
app.get('/specials', (req, res) => {
    res.render('specials', { title: 'Specials - Floral Design' });
});

// Route trang Contacts
app.get('/contacts', (req, res) => {
    res.render('contacts', { title: 'Contacts - Floral Design' });
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
