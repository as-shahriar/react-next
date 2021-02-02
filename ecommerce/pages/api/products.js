var fs = require('fs'); 

export default (req, res) => {
  fs.readFile("Data/products.json",'utf8',(err,data)=>{
    if (err) {
      res.status(404).json(err)
    }
    
    res.status(200).json(JSON.parse(data))

  })
}
