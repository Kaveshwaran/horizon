import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formSchema = (type:string)=>z.object({
  mail: z.string().email(),
  password : z.string().min(8),
  firstname : type ==='signin'?z.string().optional(): z.string().min(3),
  lastname :type ==='signin'?z.string().optional(): z.string().min(3),
  address : type ==='signin'?z.string().optional(): z.string().max(50),
  state : type ==='signin'?z.string().optional(): z.string().min(2).max(2),
  postalcode : type ==='signin'?z.string().optional(): z.string().min(6).max(6),
  dob : type ==='signin'?z.string().optional(): z.string(),
  ssn : type ==='signin'?z.string().optional(): z.string().min(3),
});

export const parsestringify = (value:any)=>{
  try {
    return(JSON.parse(JSON.stringify(value)));

  } catch (error) {
    console.error('parsestringify error',error);
    return null;
  }
}