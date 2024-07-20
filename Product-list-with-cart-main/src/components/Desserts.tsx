import { data } from "../data/data";
import DessertItem from "./DessertItem";
import styles from './Desserts.module.css'
import Cart from "./Cart";

export default function Desserts()
{
    return(
    <div className={styles.container}>
        <div className={styles.desserts}>
            <h1 className={styles.title}>Desserts</h1>
            <div className={styles.dessertItems}>
                {data.map(value => <DessertItem {...value}/>)}
            </div>
        </div>
        <Cart/>
    </div>);
}

