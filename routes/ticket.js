const router = require('express').Router();
const db = require('../db/db');



router.get('/t/:ticketId', () =>{});
router.patch('/t/:ticketId', () =>{});
router.delete('/t/:ticketId', () =>{});

router.get('/t/:username', () =>{});
router.patch('/t/:username', () =>{});
router.delete('/t/:username', () =>{});

router.post('/sell', (req,res) =>{
    const {username,price}= req.body;
    const ticket = db.create(username,price);
    res.status(201).json({message: 'Ticket Created Successfully',ticket})
});
router.post('/bulk', (req,res) =>{
    const{username,price,quantity} = req.body;
    const tickets = db.bulkCreate(username,price,quantity)
    res.status(201).json({message:'Bulk Ticket Created Successfully',tickets})
});
router.get('/draw', (req,res) =>{
    const winnerCount = req.query.wc ?? 3;
    const winners = db.draw(winnerCount);
    res.status(200).json(winners)
});
router.get('', (req,res) =>{
    const tickets = db.find();
    res.status(200).json(tickets)
});




module.exports=router