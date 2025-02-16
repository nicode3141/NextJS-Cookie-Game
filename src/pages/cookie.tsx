"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { Montserrat, Inter } from "next/font/google";
import { useState, useEffect } from 'react';
import cookiePicture from '../../public/cookie.png'
import { useSession, signIn, signOut } from "next-auth/react"
import LogInBtn from "@/components/LogIn";
import AlertDialog from "@/components/AlertDialog";
import HeaderAlert from "@/components/HeaderAlert";

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

function LogInAlert({}) {
    const { data: session } = useSession();
    return session? (
        <HeaderAlert variant={"success"}>Hi <span className="font-semibold">@{session?.user?.name}</span>!
        Here you can <span className="font-semibold text-blue-500"><LogInBtn />
            </span> to Exit!
        </HeaderAlert>
    ) : (
        <HeaderAlert>You're viewing the <span className="font-semibold">Read-Only Version</span> of Cookie Clicker! 
        Please <span className="font-semibold text-blue-500"><LogInBtn />
            </span> to Participate!
        </HeaderAlert>
    );
}



function Cookie(){
    const { data: session } = useSession();
    const [cookieCount, setCookieCount] = useState<number>(0);
    const [showAlert, setShowAlert] = useState<boolean>(false);


    useEffect(() => {
        fetch("/api/cookies")
            .then((res) => res.json())
            .then((data) => setCookieCount(data.cookies));
    }, []);
    useEffect(() => {
        if(cookieCount % 10 == 0 && cookieCount > 9){
            var userParams = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cookies: cookieCount,
                    userID: "test"
                })
              };

            fetch("/api/cookies", userParams)
        }
    }, [cookieCount, ]);
        
    function handleClick(){
        if(session){
            setCookieCount((prev) => prev + 1);
        } else{
            setShowAlert(true);
        }
        
    }

    return(
        <div className="z-Index h-screen top-0">
            <LogInAlert/>
            <div className={`flex items-center justify-center p-5 flex-col bg-slate-100  max-w-full min-h-full overflow-hidden ${interFont.className}`}>
                <div className="font-bold text-center text-4xl pt-10">Cookie Game</div>
                <div className="">
                    <motion.div initial={{ opacity: 0, scale: 0.5 }} 
                        animate={{ opacity: 1, scale: 1 }} transition={{  type: 'spring', duration: 0.2, bounce: .1 }} whileTap={{ scale: 1.2 }}>
                        <button onClick={() => handleClick()}>
                            <Image src={cookiePicture} alt="cookie" height={500} width={500}></Image>
                        </button>
                    </motion.div>
                    <div className="font-semibold text-center text-amber-700 text-2xl">{cookieCount + " Cookies"}</div>
                </div>
            </div>
            <AlertDialog showAlert={showAlert} setShowAlert={setShowAlert}></AlertDialog>
        </div>
    )
}


  
export default Cookie;