const Expense=require('./models')



exports.postAddProudct=(req,res,next)=>{
    
    const data=req.body;

    Expense.create(data)
    .then(result=>{
        console.log(result)
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getAddProudct=(req,res,next)=>{
    Expense.find()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postEditProudct=(req,res,next)=>{
    const id=req.params.id;
    const data=req.body;
    Expense.findById(id)
    .then(expense=>{
        expense.amount=data.amount
        expense.description=data.description
        expense.category=data.category

        return expense.save();
    })
    .then(xres=>{

        Expense.findById(id)
        .then(response=>{
            res.json(response)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getDeleteProudct=(req,res,next)=>{
    const id=req.params.id;

    Expense.deleteOne({_id:id})
    .then(response=>{
        res.json({status:200})
    })
    .catch(err=>{
        console.log(err)
    })
}


