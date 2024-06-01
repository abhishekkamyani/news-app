export default function Card({ data }) {
    let date = new Date(data.publishedAt);
    if (isNaN(date)) {
        date = ' '; // Set date to null or any other default value
    }
    else{
        date = date.toDateString();
    }
    const imgUrl = data.urlToImage ? data.urlToImage : `https://source.unsplash.com/random?${Math.random().toString(36).substring(7, 8)}`;


    return (
        <div className="card mx-auto">
            <img className="img-fluid" style={{ height: '170px' }} src={imgUrl} alt="..." />
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-body-secondary">{data.author}</h6>
                <p className="card-subtitle mb-2 text-body-secondary">{date}</p>
                <h5 className="card-title truncated-paragraph">{data.title}</h5>
                <p className="card-text truncated-paragraph">{data.content}</p>
                <a href={data.url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read more</a>
            </div>
        </div>
    );
}