import { MD5 } from "crypto-js";
export const handle64Base = (mode: string, str: string) => {
    if (mode === "Encode") return btoa(str);

    try {
        return atob(str);
    } catch (error) {
        return "string is not base 64";
    }
};

export const md5Converter = (str: string) => {
    return MD5(str).toString()
}

export const formatJson = (str: string) => {
    try {
        const parsed = JSON.parse(str);
        return JSON.stringify(parsed, null, 2)
    } catch (error) {

    }
}