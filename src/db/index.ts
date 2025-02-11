import { config } from 'dotenv'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

config({ path: ".env" });
    
const sql = neon("postgresql://neondb_owner:npg_nW4SQZ2KIjrk@ep-restless-tooth-a2vdnw4y-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require");

export const db = drizzle(sql);