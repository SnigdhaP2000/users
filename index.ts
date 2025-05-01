import express from 'express';
import userRoutes from './src/routes/userRoutes';
const app = express();
const port = 3002;

app.use(express.json());

app.use("/api", userRoutes);

app.listen(port, ()=>{
    console.log(`user server running on port ${port}`)
})


