const express = require('express');
const app=express();
const axios=require('axios');
const { configDotenv } = require('dotenv');



app.get("/categories/:categoryname/products", async (req,res)=>{
    const category=req.params.categoryname;
    console.log(req.query)
    const limit=req.query.n||10;
    const payload={
    
        companyName:"Tushar",
        clientID:"ef1c808d-cf9d-4bb0-9d46-c66faf000413",
        clientSecret: "mzaLUOzhHasaDpnE",
        ownerName:"Tushar",
        ownerEmail:"tushar.agarwal_cs21@gla.ac.in",
        rollNo:"2115001047"
        
        
    }

    const auth=await axios.post(`http://20.244.56.144/test/auth`,payload)

    console.log(category)
    const response=await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${category}/products?top=${limit}&minPrice=1&maxPrice=1000000`,{'headers': { 'Authorization': `Bearer ${auth.data.access_token}`}})
    
 
    console.log(response.data.length);
    res.send("hii");
})



app.listen(8000,()=>{
    console.log("server Connected");
})