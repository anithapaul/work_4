const Express=require('express');
var app=new Express();
 ad=
[{
    name:"Adidas Lotto ",
    price:" ₹1500",
    img:"./image/a.jpeg"
     
},{
    name:"Adidas Classic",
    price:" ₹1200 ",
    img:"./image/a1.jpeg"
},
{
name:"Adidas Classic Trefoil ",
    price:" ₹3000 ",
    img:"./image/a2.jpeg"
},
{
name:"Adidas Trefoil  ",
    price:" ₹2000 ",
    img:"./image/a3.jpg"
},
{
    name:"Adidas Tour Tennis Backpack",
        price:" ₹2500 ",
        img:"./image/a4.jpg"
    }

];

ni=
[{
    name:"Nike Elite ",
    price:"₹2500",
    im:"./image/b.jpeg"
     
},{
    name:"Nike Elemental Black",
    price:" ₹1200 ",
    im:"./image/b1.jpg"
},
{
name:"Nike Sports Wear" ,
price: "₹2500 ",
    im:"./image/b2.jpg"
},
{
name:"Nike Backpacks ",
    price:"₹3000",
    im:"./image/b3.jpeg"
},
{
    name:"Nike vapor Speed Large",
        price:" ₹6299 ",
        im:"./image/b4.jpg"
    }

];

pu=[{
    name:"Puma Headband",
    price:"₹1200",
    im:"./image/c.jpeg"
     
},{
    name:"Puma Pioneer ",
    price:"₹2500 ",
    im:"./image/c1.jpeg"
},
{
name:"Puma Backpacks  ",
    price:" ₹6299 ",
    im:"./image/c2.jpeg"
},
{
name:"Puma Ultimate",
    price:"₹2500",
    im:"./image/c3.jpg"
},
{
    name:"Puma Hiking Backpack",
        price:" ₹3000 ",
        im:"./image/c4.jpg"
    }

];


wc=[{
    name:"WildCraft  Black Laptop",
    price:"₹2500",
    im:"./image/d.jpeg"
     
},{
    name:" Casual WildCraft",
    price:"₹1200",
    im:"./image/d1.jpg"
},
{
name:"WildCraft Backpack",
    price:" ₹2500",
    im:"./image/d2.jpg"
},
{
name:"Women WildCraft Backpack",
    price:"₹ 7,444.00",
    im:"./image/d3.jpg"
},
{
    name:"WildCraft Voyager",
        price:" ₹1200 ",
        im:"./image/d4.jpg"
    }

];

nav=[{
    link:"/items",
    title:"items"

}
// {
    
//         link:"/author",
//         title:"author"
// }
];


app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.render('index',{nav:nav,title:"Online Shopping cart"});
});
app.get('/items',(req,res)=>{
    res.render('items',{nav:nav,title:"items"});;
});
app.get('/ad',(req,res)=>{
    res.render('ad',{nav:nav,title:"adidas"});;
});
app.get('/ni',(req,res)=>{
    res.render('ni',{nav:nav,title:"nike"});;
});
app.get('/pu',(req,res)=>{
    res.render('pu',{nav:nav,title:"puma"});;
});
app.get('/wc',(req,res)=>{
    res.render('wc',{nav:nav,title:"wildcraft"});;
});


// app.get('/author',(req,res)=>{
//     res.render('author',{nav:nav,title:"author",author:author});
// });
app.get('/adidas/:id',(req,res)=>{

    const x=req.params.id;
    res.render('adidas',{nav:nav,title:"adidas","ad":ad[x]});
});
app.get('/nike/:id',(req,res)=>{

    const y=req.params.id;
    res.render('nike',{nav:nav,title:"nike","ni":ni[y]});
});

app.get('/puma/:id',(req,res)=>{

    const a=req.params.id;
    res.render('puma',{nav:nav,title:"puma","pu":pu[a]});
});

app.get('/wildcraft/:id',(req,res)=>{

    const b=req.params.id;
    res.render('wildcraft',{nav:nav,title:"wildcraft","wc":wc[b]});
});



app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running on http://localhost:3000/index")
    });