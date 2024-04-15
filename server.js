const express = require('express')

const app = express()

const books = [
    {
        id: '1',
        name: 'Full-Stack Development',
        price: 500
    },
    {
        id: '2',
        name: 'JavaScript',
        price: 1000
    },
    {
        id: '3',
        name: 'typScript Solutions',
        price: 1500
    },
    {
        id: '4',
        name: 'React Js',
        price: 2000
    },
    {
        id: '1',
        name: 'Full-Stack Development',
        price: 5000
    },
    {
        id: '2',
        name: 'JavaScript',
        price: 100
    },
    {
        id: '3',
        name: 'typScript Solutions',
        price: 150
    },
    {
        id: '4',
        name: 'React Js',
        price: 200
    }

]

app.get('/books', (req, res) => {
    if (req.query.show === 'all') {
        return res.json(books);
    }
    if(req.query.price == '500'){
        const result = books.filter((books) => books.price <= 500);
        return res.json(result)
    }
    if(req.query.price == '1000'){
        const result = books.filter((books)=> books.price <= 1000);
        return res.json(result)

    }
    res.json(books);
})


app.listen(8000, () => {
    console.log('Server is listening on port 8000')
})