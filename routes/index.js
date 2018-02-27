const router = require('express').Router();
const db = require('../db');
const { Customer } = db.models;

router.get('/', (req, res, next) => {
    Customer.findAll()
    .then (customers => res.render('index', {customers}))
    .catch(next)
});

router.post('/', (req, res, next) => {
    Customer.create(req.body)
    .then (customer => res.redirect('/'))
    .catch(next)
});

router.put('/:id', (req, res, next) => {
    Customer.findById(req.params.id)
    .then (customer => {
        Object.assign( customer, req.body)
        return customer.save()
    })
    .then (() => res.redirect('/'))
    .catch(next)
});

router.delete('/:id', (req, res, next) => {
    Customer.findById(req.params.id)
    .then( customer => customer.destroy())
    .then (() => res.redirect('/'))
    .catch(next)
})

module.exports = router;