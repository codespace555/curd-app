const app =  require("./app.js")//#Here  import app.js
const PORT = process.env.PORT//Here PORT is variable from .env
app.listen(PORT,()=>{
    console.log(`server is runing in http://localhost:${PORT}`)
})