const{model,Schema}=require('../connection');

const mySchema = new Schema({
    title:String,
    brand:{type:String},
    category:{type:String,default:'Unknown' },
    model:{type:String},
    price:{type:Number,required:true},
    image:String,
    createdAt:{type:Date,default:Date.now}
});

module.exports=model('products',mySchema); //products is collection name