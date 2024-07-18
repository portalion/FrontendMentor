import { data } from "./data/data"
import { getImageUrl } from "./utils/imageHandler"

export default function App()
{
    return (
    <>
        {data.map(v => <img src={getImageUrl(v.image.thumbnail)}></img>)}
    </> 
)}