module.exports=(data)=> {
    'use strict';
	const express = require("express");
    var addCarRoutes = express.Router();
    addCarRoutes.route("/")
    .get((req,res)=>{
        res.render("add-car")
    })
    .post((req,res)=>{
		console.log(req.body);
        data.push(req.body);
    })   
    return addCarRoutes;
};