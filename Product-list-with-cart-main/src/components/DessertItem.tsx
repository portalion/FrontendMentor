import { getImageUrl } from "../utils/imageHandler";
import styles from "./DessertItem.module.css"

type DessertProps =
{
    category: string,
    name: string,
    price: number,
    image: Image,
}

type Image = 
{
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string,
    alt?: string
}

export default function DessertItem(dessert: DessertProps)
{
    return (
        <div className={styles.item}>
            <DessertImage {...dessert.image} alt={dessert.name}/>
            <div className={styles.description}>
                <h2 className={styles.category}>{dessert.category}</h2>
                <h2 className={styles.name}>{dessert.name}</h2>
                <h2 className={styles.price}>${dessert.price.toFixed(2)}</h2>
            </div>
        </div>
    );
}

function DessertImage(image: Image)
{
    return (
        <div className={styles.imageContainer}>
            <picture>
                <source media="(max-width: 375px)" srcSet={getImageUrl(image.mobile)}/>
                <img className={styles.image} src={getImageUrl(image.desktop)} alt={image.alt}></img>
            </picture>
            <button className={styles.button}>
                <div className={styles.icon}></div>
                Add to cart
            </button>
        </div>
        
    );
}