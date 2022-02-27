const app = require("express") ();
const port = process.env.PORT || 3000;

app.get("/app1", (req,res)=> {
    res.send(`Welcome to this express App running on ${port}`)
});


app.listen(port, ()=>console.log(`On port: ${port}`));