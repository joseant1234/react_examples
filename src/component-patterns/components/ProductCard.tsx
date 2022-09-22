import { createContext, ReactElement, CSSProperties } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/common';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// children es un array tambien porque puede recibir mas de un elemento
export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
}

// al hacerlo como modulo esos estilos son unicos, los está encapsulando
export const ProductCard = ({ children, product, className, style, onChange }: Props) => {
    const { counter, increaseBy } = useProduct({ onChange, product });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={ style }
            >
                { children }
                {/* <ProductImage img={ product.img }/>

                <ProductTitle title={ product.title } />

                <ProductButtons
                    increaseBy={increaseBy}
                    counter={counter}
                /> */}
            </div>
        </ Provider>
    )
}

// al product card se le está agregando la propiedad Title
// cuando estan en diferentes archivos no funciona asignarle directamente
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
