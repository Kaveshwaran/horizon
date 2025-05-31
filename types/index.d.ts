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