import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';

interface Props {
    product: Product
}
interface Product {
    id: string;
    title: string;
    img?: string;
}

// al hacerlo como modulo esos estilos son unicos, los está encapsulando
export const ProductCard = ({ product }: Props) => {
    const { counter, increaseBy } = useProduct();

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src={product.img ? product.img : noImage } alt="Coffee Mug" />
            {/* <img className={styles.productImg} src={noImage} alt="Coffee Mug" /> */}
            <span className={styles.productDescription}>{ product.title }</span>
            <div className={styles.buttonsContainer}>
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}>
                    -
                </button>
                <div className={styles.countLabel}>
                    { counter }
                </div>
                <button
                    className={styles.buttonAdd}
                    onClick={() => increaseBy(+1)}>
                    +
                </button>
            </div>
        </div>
    )
}
