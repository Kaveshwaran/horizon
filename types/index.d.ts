
declare type balanceboxprops  = {
    totalbanks: number,
    totalbalance: number,
    accounts : string[],
    balance : number[],
}

declare type donoughchart = {
    accounts : string[],
    balance : number[],
}

declare type user = {
    name : string,
    nickname : string,
    id : string,
    mail : string,
    accounts : string[],
    balance : number[],
    totalbalance : number,
    totalbanks: number,
}

declare type signUpParams = {
    mail: string;
    password: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
    address?: string | undefined;
    state?: string | undefined;
    postalcode?: string | undefined;
    dob?: string | undefined;
    ssn?: string | undefined;
}

declare type signInParams = {
    mail: string;
    password: string;
}