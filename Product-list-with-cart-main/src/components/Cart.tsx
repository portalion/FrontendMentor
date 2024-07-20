import { getIconUrl } from "../utils/imageHandler";
import styles from './Cart.module.css'

export default function Cart()
{
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Your Cart (0)</h2>
            <img className={styles.image}alt="empty" src={getIconUrl('illustration-empty-cart')}></img>
            <p className={styles.text}>Your added items will appear here</p>
        </div>
    );
}