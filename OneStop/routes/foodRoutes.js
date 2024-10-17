const express = require("express")
const router = express.Router();
const Food = require('../models/foodModel')

router.get("/getallitems",async(req, res) =>{
    try{
        const Items = await Food.find({})
        res.send(Items)

    }catch(error){
        return res.status(400).json({ message : error});

    }
});

module.exports = router;