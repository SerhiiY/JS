export const add = (...args) => {
    const isArgsNotValidType = args.some(arg => typeof arg !== "number");
    if(isArgsNotValidType){
        return null;
    };
    return args.reduce((sum, arg) => sum + arg, 0);
};