export function greeter(person: string) {
    return "Hello, " + person;
}

export function arrayToDict<T extends { id : string}> (array: T[]) : { [k:string] : T} {
    const output : {[k:string]: T}= {};

     array.forEach( val => {

        output[val.id] = val;

     })

     return output;
}
