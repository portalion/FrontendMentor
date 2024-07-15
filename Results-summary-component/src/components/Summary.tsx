import CategoryLabel, { CategoryLabelProps } from "./CategoryLabel";

type SummaryProps =
{
    data: CategoryLabelProps[]
}

function Summary({data}: SummaryProps)
{
    return (
        <div className="summary">
            <h2 className="summary__title">Summary</h2>
            <div className="summary__categories">
                {data.map(v => <CategoryLabel {...v}/>)}
            </div>
            <button className="summary__button">Continue</button>
        </div>
    );
}

export default Summary;