
import { MongoClient } from "mongodb";

let clients;

export const connectToMongoDB=async ()=>{
try{
    clients=await MongoClient.connect(process.env.DB_URL)
    console.log("MongoDB connected");

}catch(err){
    console.log("MongoDb Connection Error: ",err);
    
}
}
export const getDB=()=>{
    if(!clients){
        throw new Error("Database not connected")
    }
    return clients.db();
}