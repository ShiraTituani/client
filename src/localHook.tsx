import { useState } from "react";


export function useInitSearch(key: string, initialValue: string) {
    const [value, setValue] = useState(() => {
        const stored = window.localStorage.getItem(key);
        return stored !== null ? stored : initialValue;
    });

    const setLocalStorage = (val: string) => {
        window.localStorage.setItem(key, val);
        setValue(val); 
    };

    return {
        value,
        setValue,
        setLocalStorage
    };
}



