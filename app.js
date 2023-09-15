const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const path=require('path')


const routes=require('./routes')
const cors=require('cors')

app=express()
app.use(cors())
app.use(bodyParser.json({extends:false}))

app.post('/add-product',routes.postAddProudct)
app.get('/get-product',routes.getAddProudct)
app.post('/edit-product/:id',routes.postEditProudct)
app.get('/delete-product/:id',routes.getDeleteProudct)



app.use((req, res) => {
    
    res.sendFile(path.join(__dirname,`/Templates/${req.url}`));
})



mongoose.connect('mongodb+srv://bipinsingh:bipinsingh@cluster0.muz4szn.mongodb.net/Shop?retryWrites=true&w=majority')
.then(result=>{
    console.log("Listening for the client")
    app.listen(3000)
})
.catch(err=>console.log(err))
