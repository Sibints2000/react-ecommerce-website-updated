const express = require('express')
const data = require("./data")
const cors = require("cors")
const app = express()
const port = 3000


// middlewares
app.use(express.json());
app.use(cors())

app.get('/products', (req, res) => {
  res.send(data)
})
app.get('/category/:id', (req, res) => {

  if(req.params.id == 'all')
  {
    res.send(data)
  } 
  else
  {
    var new_data = data.filter(( product ) => (product.category == req.params.id))
    res.send(new_data);
  }
})

app.get('/products/categories',(req,res)=>{
  var categories = data.map((product)=>{ 
   return product.category;
   })
   categoryArray = categories.filter(function(elem, pos) {
    return categories.indexOf(elem) == pos;
  })
   res.send(categoryArray);
})

app.get('/products/:id',(req,res)=>{
  var single_data = data.filter((product)=>{
    return product.id == (req.params.id)
  })
  res.send(single_data[0]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})