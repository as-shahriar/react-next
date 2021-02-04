var fs = require('fs'); 

export default (req, res) => {
    if (req.method === 'POST') {
        fs.readFile("Data/orders.json",'utf8',(err,data)=>{
            let savedData = JSON.parse(data)
            let newData = JSON.parse(req.body)
            newData.orderID = savedData.length+1
            let date = new Date()
            newData.date = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
            let totalPrice = 0
            let totalQty = 0
            newData.orders.forEach(e=>{
                totalPrice += e.price*e.cart_qty
                totalQty += e.cart_qty
            })
            newData.totalPrice = totalPrice
            newData.totalQty = totalQty
            fs.writeFile("Data/orders.json",JSON.stringify([...savedData,newData]),(err)=>console.log(err))
        })
        res.status(201).json({})
    }
    else{
        let data = fs.readFileSync("Data/orders.json",'utf8')
        if(req.query.id!=null){
            let item = JSON.parse(data).filter(item=>{
                return item.orderID == req.query.id
            })
            if(item.length)  res.status(200).json(item[0]) 
            else res.status(404).json({err:'No ID Found'})
        }
        else  res.status(200).json(JSON.parse(data))

    }
}
