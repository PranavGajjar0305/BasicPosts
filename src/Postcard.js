import './Postcard.css';

function Postcard({ prop }) {
    console.log(prop.id)
    return (
        <div className="postcardindi">
            <div className="userandid">
                <p className='userId'>UserID: {prop.userId}</p>
                <p className='id'>PostID: {prop.id}</p>
            </div>
            <hr />
            <h3 className='title'>{prop.title}</h3>
            <h5 className='body'>{prop.body}</h5>
        </div>
    );
}

export default Postcard;