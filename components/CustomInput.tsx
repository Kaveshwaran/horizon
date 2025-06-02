import { Input } from "@/components/ui/input";
import React from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form";
import { formSchema } from "@/lib/utils";
import { Control } from "react-hook-form";
import z from "zod";


const FormSchema = formSchema("signup");

declare type Custominput = {
    name : keyof z.infer<typeof FormSchema>,
    label:string,
    placeholder:string,
    control:Control<z.infer<typeof FormSchema>>,
    inputtype?:React.HTMLInputTypeAttribute,
}


const CustomInput = ({name,label,placeholder,control,inputtype='text'}:Custominput) => {
  return (
    <div className="mt-3">
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div>
          <FormLabel className="ml-1">{label}</FormLabel>
          <div>
            <FormControl className="mt-1">
              <Input id={name} placeholder={placeholder} {...field} type={inputtype}/>
            </FormControl>
            <FormMessage />
          </div>
        </div>
      )}
    />
    </div>
  );
};

export default CustomInput;
