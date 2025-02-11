"use client";

import { motion } from "framer-motion"
import { Montserrat, Inter } from "next/font/google";
import { useState } from 'react';

const montserratFont = Montserrat({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ["latin"],
});

const interFont = Inter({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ["latin"],
});

export default function Cookie(){
    const [cookieCount, setCookieCount] = useState<number>(0);
    
    function handleClick(){
        setCookieCount((prev) => prev + 1);
    }

    return(
        <div className={`flex items-center justify-center p-5 flex-col bg-slate-100 h-screen ${interFont.className}`}>
            <div className="font-bold text-center text-4xl pt-10">Cookie Game</div>
            <div className="">
                <motion.div initial={{ opacity: 0, scale: 0.5 }} 
              animate={{ opacity: 1, scale: 1 }} transition={{  type: 'spring', duration: 0.2, bounce: .1 }} whileTap={{ scale: 1.2 }}>
                    <button onClick={() => handleClick()}>
                        <img src="https://images.cdn.us-central1.gcp.commercetools.com/4e5a974e-1287-4368-811f-41d06eb6c548/Chocolate%20Chip%20Silo%20-t71xMOs7.png" height={500} width={500}></img>
                    </button>
                </motion.div>
                <div className="font-semibold text-center text-amber-700 text-2xl">{cookieCount + " Cookies"}</div>
            </div>
        </div>
    )
}