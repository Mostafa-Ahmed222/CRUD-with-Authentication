import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDB from "./DB/connect.js"
import * as indexRouter from "./index.router.js"
const app = express()
const port = 3000
const basedUrl = `/api/v1`
app.use(express.json())
app.use(`${basedUrl}/auth`, indexRouter.authRouter)
app.use(`${basedUrl}/user`, indexRouter.userRouter)
app.use(`${basedUrl}/blog`, indexRouter.blogRouter)
app.use(`*`, (req, res)=>{
    res.json({message : "error 404 Page not found"})
})
connectDB()
app.listen(port, ()=> {
    console.log(`server is running on port........ ${port}`);
})