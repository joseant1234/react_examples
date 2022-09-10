import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/common';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


// al hacerlo como modulo esos estilos son unicos, los está encapsulando
export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
             <div className={styles.productCard}>
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
