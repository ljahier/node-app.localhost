export function getValue(flag: string): string {
    const value = flag.split('=');

    if (value.length != 2 || value[1].length === 0) {
        throw new Error(`You have not defined a value for the parameter: ${flag}`)
    }
    return value[1];
}