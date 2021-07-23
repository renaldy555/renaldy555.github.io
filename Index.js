const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000

// static
app.use(express.static('public'))

// view engine EJS
app.set('view engine', "EJS")

app.use(expressLayouts)

// HALAMAN INDEX
app.get('/', (req, res) => {

    var ayah = [
        {nama: 'Yahya', umur: '35' },
        {nama: 'Milos', umur: '45' },
        {nama: 'Zakaria', umur: '25' },
        {nama: 'Zakia', umur: '45' } 
        ];

  res.render('pages/index',{
    layout : 'layout/main-layouts.ejs',
    title : 'HOME',
    ayah
  });
});

// HALAMAN ABOUT

app.get('/about', (req, res)=>{
    res.render('pages/about', {
        layout : 'layout/main-layouts.ejs',
        title : 'Page | About'
    })
})

app.get('/contact', (req, res)=>{
    res.render('pages/contact', {
        layout : 'layout/main-layouts.ejs',
        title : 'Page | Contact'
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
