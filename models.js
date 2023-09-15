const mongoose=require('mongoose');


const Schema=mongoose.Schema;

const Expense=new Schema({
    amount:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,

    },
    category:{
        type:String,
        required:true,
    }
})


module.exports=mongoose.model('Expense',Expense)
// const sequelize=require('./database')
// const Sequelize=require('sequelize')


// module.exports=sequelize.define('Expense',{
//     id:{
//         type:Sequelize.INTEGER,
//         primaryKey:true,
//         autoIncrement:true,
//     },
//     amount:Sequelize.DOUBLE,
//     description:Sequelize.STRING,
//     category:Sequelize.STRING

// })