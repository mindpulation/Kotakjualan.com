const express = require('express');
const app = express.Router();

const cors = require('cors');
const comp = require('compression');
const bp = require('body-parser');

const Control = require('../Controllers/Index');
const control = new Control();

app.use(cors());
app.use(comp());
app.use(bp.json());

app.get('/e', async (req,res)=>{
  let temp = await control.mongo.getOrder(JSON.parse(req.query.param).param);
  res.send({result:temp});
});

app.post('/e', async (req, res) => {
  let temp = await control.mongo.postOrder(req.body.param);
  res.send({result:temp});
});

app.put('/e', async (req, res) => {
  let temp = await control.mongo.putOrder(req.body.param);
  res.send({result:temp});
});

app.delete('/e', async (req, res) => {
  let temp = await control.mongo.delOrder(req.body.param);
  res.send({result:temp});
});

app.get('*', ( req, res ) => { res.send({ status: "OK" }) });
app.put('*', ( req, res ) => { res.send({ status: "OK" }) });
app.post('*', ( req, res ) => { res.send({ status: "OK" }) });
app.delete('*', ( req, res ) => { res.send({ status: "OK" }) });

module.exports = app;