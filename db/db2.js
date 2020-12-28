
const mongoose = require("mongoose") ;

mongoose.connect("mongodb://localhost:27017/orderDB") ; 

const orderschema = new mongoose.Schema ({
      
    Delivery:String , 
    Type:String , 
    Weight:String ,
    Pickup:[{
        statuscode:Number , 
        mobile:Number , 
        address:String , 
        departure:String , 

    }]  ,
    Destination:[
        {
            statuscode:Number , 
            mobile:Number ,
            address:String , 
            departure:String ,  

        }
    ]   , 
    Paymenttype:String
    
})

 

const order= mongoose.model('order' , orderschema) ; 
const order1 = new order({
    Delivery:"now" , 
    Type:"courier " , 
    Weight:"5kg" ,
    Pickup:[{
        statuscode:110051 , 
        mobile:123456 , 
        address:"dajnjfwnjawnkl" , 
        departure:"adjnkjawnjnaw" , 

    }]  ,
    Destination:[
        {
            statuscode:110092 , 
            mobile:982632661 ,
            address:"dankjcnjanja" , 
            departure:"wdjWQNJdnwkl" ,  

        }
    ]   , 
    Paymenttype:"cash"
})
order1.save() ; 
