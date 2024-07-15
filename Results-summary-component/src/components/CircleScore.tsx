type CircleScoreProps = 
{
    score: number,
}

function CricleScore({score}: CircleScoreProps)
{
    return (
        <div className="circle-score">
            <p className="score">{score}</p>
            <p className="score__sum">of 100</p>
        </div>
    );
}

export default CricleScore;