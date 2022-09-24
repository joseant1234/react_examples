import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/common";


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product}) => {

        setShoppingCart(oldShoppingCart => {

          // si es nulo significa que no existe, entonces se crea el produto en base al recibido
          const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

          // si es mayor que 0 significa que se puede incrementar en la cantidad (+1 o -1)
          if (Math.max(productInCart.count  + count, 0) > 0) {
            productInCart.count += count;
            return {
              ...oldShoppingCart,
              [product.id]: productInCart,
            }
          }
          // significa que hay q borrar el producto, porque la sumatorio es 0 o menor (-1)
          const { [product.id]: toDelete, ...rest } = oldShoppingCart;
          return rest;

          // otra forma de hacerlo
          // if (count === 0) {
          //   const { [product.id]:toDelete, ...rest } = oldShoppingCart;
          //   return rest;
          // }

          // return {
          //   ...oldShoppingCart,
          //   [product.id]: {...product, count}
          // };
        });
      }

    return {
        shoppingCart,
        onProductCountChange,
    }
}
