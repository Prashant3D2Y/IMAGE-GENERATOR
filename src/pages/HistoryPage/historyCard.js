import {Link} from 'react-router-dom';

const HistoryCard = (props) => {

    const data = props.item;

    return(
        <div className='history-card'>
            <h4>{data.title}</h4>
            <p>{data.imageUrl}</p>
            <Link to={`/history/${data.id}`}>More</Link>
        </div>
    )
}

export default HistoryCard;