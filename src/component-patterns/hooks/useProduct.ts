import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/common";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value  = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);
        // setCounter(prev => Math.max(prev + value, 0));
        // cuando el counter cambia se llama el onChange
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
      setCounter(value);
    }, [value])


    return {
        counter,
        increaseBy
    }
}
