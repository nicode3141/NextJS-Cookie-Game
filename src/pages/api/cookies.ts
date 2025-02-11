"use server"
import { NextApiRequest, NextApiResponse } from "next"
import { eq } from "drizzle-orm"
import { db } from "@/db/index"
import { users } from "@/db/schema"

export const getCookieCount = async () => {
    const data = await db.select().from(users).limit(1);
    return data[0].cookies ?? 0;
}

export const setCookieCount = async (cookies: number, userID: string) => {
    console.log("cookies")
    const data = await db
        .update(users)
        .set({ cookies: cookies })
        .where(eq(users.userID, userID))
        .returning({user: users.userID});

    return data[0].user;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const cookieCount = await getCookieCount();
        return res.status(200).json({cookies: cookieCount})
    }

    if(req.method === "POST") {
        const userID = await setCookieCount(req.body.cookies, req.body.userID);
        
        if(userID == req.body.userID){
            return res.status(200).json({userID: userID})
        } else{
            return res.status(500).json({message: "Internal Server Error"})
        }
    }

    return res.status(405).json({message: "Method is not allowed"})
}