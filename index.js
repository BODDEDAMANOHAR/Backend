const express=require("express");
const app=express();
const path=require("path");

const port=8080;
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.set("viewengine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
   // res.send("This is root");
   res.render("home.ejs");
});

app.get("/ig/:username",(req,res)=>{
//     const followers=["manu","abc","xyz"];
    let {username}=req.params;
//    //console.log(username);
const instaData=require("./data.json");
const data=instaData[username];
//console.log(data);
if(data){
    res.render("instagram.ejs",{data});
}else{
    res.render("error.ejs");
}

  
  
});

app.get("/hello",(req,res)=>{
     res.send("hello");
   
 });

 app.get("/rolldice",(req,res)=>{
    // res.render("rolldice.ejs");
    let DiceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{ DiceVal});
  
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});