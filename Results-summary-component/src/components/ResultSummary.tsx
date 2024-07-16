import {data} from '../data/data'
import ResultCard from './ResultCard';
import Summary from './Summary';

export default function ResultSummary()
{
    const score = Math.trunc(data.reduce((acc, value) => (value.score + acc), 0) / data.length);

    return (
        <div className='container'>
            <ResultCard score={score}/>
            <Summary data={data}/>
        </div>
    );
}
