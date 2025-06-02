"use server";

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { ID } from "node-appwrite";
import { parsestringify } from "../utils";

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return parsestringify(await account.get());
  } catch (error) {
    return null;
  }
}

export const signIn = async (userdata: signInParams) => {
    const{mail,password} = userdata;
  try {
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(mail,password);
    return parsestringify(response);
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
