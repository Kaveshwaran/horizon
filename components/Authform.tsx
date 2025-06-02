"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/utils";
import CustomInput from "./CustomInput";
import { TbLoader2 } from "react-icons/tb";
import Link from "next/link";
import { FaLeaf } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";

const Authform = ({ type }: { type: "signin" | "signup" }) => {
  const [user, setuser] = useState(null);
  const [isloading, setisloading] = useState(false);
  const FormSchema = formSchema(type);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mail: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
      state: "",
      postalcode: "",
      dob: "",
      ssn: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setisloading(true);
    try {
      //sign up with Appwrite & create account with plaid token
      if (type === "signin") {
        const user = await signIn({ mail: data.mail, password: data.password });
        if (user) router.push("/");
      }
      if (type === "signup") {
        const newUser = await signUp(data);
        setuser(newUser);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisloading(false);
    }
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center w-1/5 ml-[200px]">
      <h1 className="text-2xl font-bold mb-5">HORIZON</h1>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">
          {user ? "Link Account" : type === "signin" ? "Sign in" : "Sign up"}
        </h1>
        <p className="text-neutral-700">
          {user ? "Link you account to get started" : "Enter your credentials"}
        </p>
      </div>
      <div>
        {user ? (
          <div>{/* PlaidLink */}</div>
        ) : (
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                {type === "signin" && (
                  <div className="mb-8">
                    <CustomInput
                      name="mail"
                      label="Mail"
                      placeholder="Enter your mail id"
                      control={form.control}
                    />
                    <CustomInput
                      name="password"
                      label="Password"
                      placeholder="Enter your password"
                      inputtype="password"
                      control={form.control}
                    />
                  </div>
                )}
                {type === "signup" && (
                  <div className="flex flex-col mb-8">
                    <div className="flex flex-row gap-3">
                      <CustomInput
                        name="firstname"
                        label="First Name"
                        placeholder="Enter your first name"
                        control={form.control}
                      />
                      <CustomInput
                        name="lastname"
                        label="Last Name"
                        placeholder="Enter your last name"
                        control={form.control}
                      />
                    </div>
                    <CustomInput
                      name="address"
                      label="Address"
                      placeholder="Enter your address"
                      control={form.control}
                    />
                    <div className="flex flex-row gap-3">
                      <CustomInput
                        name="state"
                        label="State"
                        placeholder="Ex : TN"
                        control={form.control}
                      />
                      <CustomInput
                        name="postalcode"
                        label="Postal Code"
                        placeholder="Ex : 638006"
                        inputtype="number"
                        control={form.control}
                      />
                    </div>
                    <div className="flex flex-row gap-3">
                      <CustomInput
                        name="dob"
                        label="Date of Birth"
                        placeholder="yyyy-mm-dd"
                        inputtype="date"
                        control={form.control}
                      />
                      <CustomInput
                        name="ssn"
                        label="SSN"
                        placeholder="Ex : 1234"
                        inputtype="number"
                        control={form.control}
                      />
                    </div>
                    <CustomInput
                      name="mail"
                      label="Mail"
                      placeholder="Enter your mail id"
                      control={form.control}
                    />
                    <CustomInput
                      name="password"
                      label="Password"
                      placeholder="Enter your password"
                      inputtype="password"
                      control={form.control}
                    />
                  </div>
                )}
                <Button disabled={isloading} className="w-full" type="submit">
                  {isloading ? (
                    <>
                      <TbLoader2 className="animate-spin" /> &nbsp; Loading...
                    </>
                  ) : (
                    <div className="text-base p-1">
                      {type === "signin" ? "Sign in" : "Sign up"}
                    </div>
                  )}
                </Button>
              </form>
            </Form>
          </>
        )}
      </div>
      {user === null &&(<footer>
        <p className="mt-3 text-center w-full">
          {type === "signin"
            ? "Don't have an account?"
            : "Already have an account"}
          <Link
            className="ml-1 font-bold"
            href={type === "signin" ? "/sign-up" : "sign-in"}
          >
            {type === "signin" ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </footer>)}
    </div>
  );
};

export default Authform;
