"use server";

import * as dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

dotenv.config({
    path: '.env',
});



const databaseUrl = process.env.DATABASE_URL;


function connect(){
    if(databaseUrl == undefined){
        console.log(databaseUrl);
       throw new Error('Database url is required');
    } else{
        const sql = neon(databaseUrl);

        return drizzle({ client: sql });
    }

}

export const db = connect();