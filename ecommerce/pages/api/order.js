var fs = require('fs'); 

export default (req, res) => {
    if (req.method === 'POST') {
        fs.readFile("Data/orders.json",'utf8',(err,data)=>{
            let savedData = JSON.parse(data)
            let newData = JSON.parse(req.body)
            newData.orderID = savedData.length+1
            let totalPrice = 0
            newData.orders.forEach(e=>{
                totalPrice += e.price*e.cart_qty
            })
            newData.totalPrice = totalPrice
            fs.writeFile("Data/orders.json",JSON.stringify([...savedData,newData]),(err)=>console.log(err))
        })
        res.status(201).json({})
    }
    else{
        fs.readFile("Data/orders.json",'utf8',(err,data)=>{
            res.status(200).json(JSON.parse(data))
        })
    }
}
