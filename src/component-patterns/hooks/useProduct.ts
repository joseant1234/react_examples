import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/common";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: useProductArgs) => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);
        // setCounter(prev => Math.max(prev + value, 0));
        // cuando el counter cambia se llama el onChange
        onChange && onChange({ count: newValue, product });
    }

    return {
        counter,
        increaseBy
    }
}
