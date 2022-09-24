import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/common";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value  = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(value);
    // para no redibujar los componentes en caso de que cambie
    // si existe la funcion onChange, significa que va ser controlado desde afuera, y por tanto solo necesita que se le envie la cantidad cambiada (+1, -1)
    // por tanto el setCounter se manejaría en caso no se enví una función de onChange
    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {
        if (isControlled.current) {
            // ! es para obligar a ts que si ignore el posible error
            return onChange!({ count: value, product });
        }
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
