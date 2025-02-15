

import { NextApiRequest, NextApiResponse } from "next"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        return res.status(200).json({cookies: "hi"})
    }

    

    return res.status(405).json({message: "Method is not allowed"})
}