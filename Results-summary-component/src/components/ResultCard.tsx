import CricleScore from "./CircleScore";

type ResultProps =
{
    score: number,
}

function ResultCard({score}: ResultProps)
{
    return (
        <div className="result">
            <h2 className="result__title">Your Result</h2>
            <CricleScore score={score}/>
            <h3 className="result__subtitle">Great</h3>
            <p className="result__text">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    );
}

export default ResultCard;