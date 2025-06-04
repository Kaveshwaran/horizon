"use server";

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { ID } from "node-appwrite";
import { parsestringify } from "../utils";

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    
    const userdata = await account.get();
    return parsestringify(userdata);
  } catch (error) {
    return null;
  }
}

export const signIn = async (userdata: signInParams) => {
    const{mail,password} = userdata;
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(mail,password);
    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parsestringify(session);
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export const signUp = async (userdata: signUpParams) => {
    const {mail,password,firstname,lastname} = userdata
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(ID.unique(), mail, password, `${firstname} ${lastname}`);
    const session = await account.createEmailPasswordSession(mail, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parsestringify(newUserAccount);
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export const logOutAccount=async()=>{
  try {
    const {account} = await createSessionClient();
    const result = await account.deleteSession('current');
    (await cookies()).delete("appwrite-session");
    return parsestringify(result);
  } catch (error) {
    console.error('Error in logOutAccount',error);
    return null
  }
}
