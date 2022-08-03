import cors from "cors"
export const initCorsMiddleware=()=>{
    const corsOptions = {
        origin: "http://localhost:3001",
    };
    return cors(corsOptions)
}
