export type CategoryLabelProps =
{
    score: number,
    icon: string, 
    category: string,
    color: string,
    background: string
}

function CategoryLabel({score, icon, category, color, background}: CategoryLabelProps)
{
    return (
        <div className="category-label" style={{backgroundColor: background, color: color}}>
            <img className="category-label__icon"src={icon}/>
            <p className="category-label__title">{category}</p>
            <p className="category-label__score"><span>{score}</span> / 100</p>
        </div>
    );
}

export default CategoryLabel;