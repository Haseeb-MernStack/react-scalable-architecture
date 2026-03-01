import express from 'express';
import cors from 'cors';
import helmet from "helmet";
import morgan from 'morgan';
import compression from 'compression';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.get("/api/health", (req,res)=>{
    res.status(200).json({message: "Server is running"});
});

export default app;